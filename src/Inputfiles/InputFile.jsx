import axios from "axios";
import React, { useCallback, useState } from "react";
import { read, utils, writeFileXLSX } from "xlsx";
import { parse } from "date-fns";

export default function SheetJSReactAoO() {
  const [pres, setPres] = useState([]);
  const [fres, setFres] = useState([]);

  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const wb = read(data, { type: "binary" }); // Parse the binary data
      const ws = wb.Sheets[wb.SheetNames[0]]; // Get the first worksheet
      const jsonData = utils.sheet_to_json(ws); // Generate objects
      setPres(jsonData); // Update state
      setFres(filterUniqueUsers(jsonData)); // Update state
    };
    reader.readAsBinaryString(file);
  }, []);

  function postInMeeting() {
    const url = "https://apiforjapa.dailywith.me/records/meetings";
    const data = {
      meeting_name: "Japa",
    };
    const [day, month, year] = pres[0]["Join Time"].split(/[/: ]/);
    const fullYear = `20${year}`;
    const date = `${fullYear}-${month}-${day}`;
    data.date = date;
    let id = data.date.replace(/-/g, "").slice(3);
    data.id = id;
    axios
      .post(url, data)
      .then((response) => {
        console.log("Request successful!", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }

  function postInUsers() {
    let preusers = [];
    let url = "https://apiforjapa.dailywith.me/records/users";
    axios.get(url).then((response) => {
      response.data.records.forEach((e) => {
        // Push an object containing name and email to preusers array
        preusers.push({ name: e.name, email: e.email });
      });

      //   console.log(preusers);

      let masterData = []; // Create an array to hold the users to be added

      fres.forEach((e) => {
        // console.log(e["Name (Original Name)"]);

        // Check if the name is available and not empty
        let isNameAvailable =
          e["Name (Original Name)"] && e["Name (Original Name)"].trim() !== "";

        // Normalize email to null for users with undefined email
        let email = e["User Email"] !== undefined ? e["User Email"] : null;

        // Check for duplicate user based on name and email
        let isDuplicate = preusers.some(
          (user) =>
            isNameAvailable &&
            user.name === e["Name (Original Name)"] &&
            user.email === email
        );

        if (!isDuplicate && isNameAvailable) {
          let data = {
            name: e["Name (Original Name)"],
            email: email, // Use the normalized email value
          };
          masterData.push(data); // Add the user to the master data array
        }
      });

      // Make a single POST request to add all the new users at once
      axios
        .post(url, masterData)
        .then((response) => {
          console.log("Request successful!", response.data);
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    });
  }

  // Custom function to parse the date string and return a valid Date object
  function parseDate(dateString) {
    // Adjust the format according to the input date string (here it assumes 'DD/MM/YY hh:mm:ss a')
    return parse(dateString, "dd/MM/yy hh:mm:ss a", new Date());
  }

  function postInAttendance() {
    axios
      .get("https://apiforjapa.dailywith.me/records/users")
      .then((response) => {
        let users = response.data.records;
        const finalAttendanceData = registerAttendance(users, fres);

        axios
          .get("https://apiforjapa.dailywith.me/records/attendance")
          .then((response) => {
            const storedData = response.data.records;
            postAttendanceData(finalAttendanceData, storedData);
          })
          .catch((error) => {
            console.error("Error fetching stored data:", error.message);
          });
      });
  }

  async function postAttendanceDataToDatabase() {
    try {
      // Fetch users from the API
      const usersResponse = await axios.get(
        "https://apiforjapa.dailywith.me/records/users"
      );
      const users = usersResponse.data.records;

      // Create a map of user objects with 'name-email' as the key
      const userMap = new Map();
      for (const user of users) {
        const key = `${user.name}-${user.email}`;
        userMap.set(key, user);
      }

      // Extract the meeting date from the first record of fres (assuming fres is not empty)
      const meetingDate = formatDateToYmmdd(fres[0]["Join Time"]);

      // Register attendance data
      const finalAttendanceData = [];

      for (const user of users) {
        // console.log();

        // const key = `${user.name}-${user.email || ""}`;
        const isUserPresentInFres = fres.some((data) => {
          // console.log(data["User Email"]);
          if (data["User Email"] != undefined) {
            return (
              data["Name (Original Name)"] === user.name &&
              data["User Email"] === user.email
            );
          } else {
            return (
              data["Name (Original Name)"] === user.name && user.email === null
            );
          }
        });

        if (isUserPresentInFres) {
          // User is present in fres, so mark as PRESENT and add duration and inoutTime
          const dataInFres = fres.find((data) => {
            if (data["User Email"] != undefined) {
              return (
                data["Name (Original Name)"] === user.name &&
                data["User Email"] === user.email
              );
            } else {
              return (
                data["Name (Original Name)"] === user.name &&
                user.email === null
              );
            }
          });

          // Remove the first 9 characters from joinTime and leaveTime
          const joinTime = dataInFres["Join Time"].substring(9);
          const leaveTime = dataInFres["Leave Time"].substring(9);

          finalAttendanceData.push({
            user: user.id,
            meeting: meetingDate,
            duration: dataInFres["Duration (Minutes)"],
            inoutTime: `${joinTime} - ${leaveTime}`,
            status: "PRESENT",
          });
        } else {
          // User is absent in fres, so mark as ABSENT
          finalAttendanceData.push({
            user: user.id,
            meeting: meetingDate,
            // duration: null,
            // inoutTime: null,
            status: "ABSENT",
          });
        }
      }

      console.log(users);
      console.log("final attendance data:", finalAttendanceData);

      const storedDataResponse = await axios.get(
        "https://apiforjapa.dailywith.me/records/attendance"
      );
      const storedData = storedDataResponse.data.records;

      console.log("stored", storedData);
      console.log("final attendance data", finalAttendanceData);

      const uniqueSecondMap = new Map();

      for (const item of finalAttendanceData) {
        const key = `${item.user}-${item.meeting}`;
        uniqueSecondMap.set(key, item);
      }

      for (const item of storedData) {
        const key = `${item.user}-${item.meeting}`;
        uniqueSecondMap.delete(key);
      }

      const uniqueSecondArray = Array.from(uniqueSecondMap.values());

      console.log("uniq arr", uniqueSecondArray);


      if (uniqueSecondArray.length > 0) {
        axios
        .post("https://apiforjapa.dailywith.me/records/attendance", uniqueSecondArray)
        .then((response) => {
          console.log("Attendance data posted successfully:", response.data);
        });
      }
    } catch (error) {
      console.error("Error processing attendance data:", error.message);
    }
  }

  function formatDateToYmmdd(dateString) {
    // Parse the date string using the Date constructor
    const [datePart, timePart] = dateString.split(" ");
    const [dd, mm, yy] = datePart.split("/");

    const formattedDate = `${yy.split("")[1]}${mm}${dd}`;
    return formattedDate;
  }

  function submitHandler() {
    postInMeeting();
    postInUsers();
    postAttendanceDataToDatabase();
    // postInAttendance();
  }

  function filterUniqueUsers(usersArray) {
    // Assuming your data is stored in an array called 'dataArray'
    const dataArray = [...usersArray];

    // Step 1: Create a map to group users by their unique identifier (email and name)
    const userMap = new Map();
    dataArray.forEach((entry) => {
      const key = `${entry["Name (Original Name)"]}_${entry["User Email"]}`;
      if (!userMap.has(key)) {
        userMap.set(key, {
          ...entry,
          "Duration (Minutes)": parseInt(entry["Duration (Minutes)"]),
          "Join Time": entry["Join Time"],
          "Leave Time": entry["Leave Time"],
        });
      } else {
        const existingUser = userMap.get(key);
        existingUser["Duration (Minutes)"] += parseInt(
          entry["Duration (Minutes)"]
        );
        const joinTime = entry["Join Time"];
        const leaveTime = entry["Leave Time"];
        if (parseDate(joinTime) < parseDate(existingUser["Join Time"])) {
          existingUser["Join Time"] = joinTime;
        }
        if (parseDate(leaveTime) > parseDate(existingUser["Leave Time"])) {
          existingUser["Leave Time"] = leaveTime;
        }
      }
    });

    // Step 5: Create a new array with the unique users and their updated information
    const masterDataArray = Array.from(userMap.values());
    // console.log(masterDataArray);
    // Now 'masterDataArray' contains the master data set with unique users and their aggregated information.
    return masterDataArray;
  }

  // Function to calculate duration and inoutTime
  function calculateDurationAndInOutTime(joinTime, leaveTime) {
    const joinDateTime = new Date(joinTime);
    const leaveDateTime = new Date(leaveTime);

    const durationInMinutes = (leaveDateTime - joinDateTime) / (1000 * 60);
    const inoutTime = `${joinDateTime.toLocaleTimeString()} - ${leaveDateTime.toLocaleTimeString()}`;

    return { duration: durationInMinutes, inoutTime };
  }

  // Function to register attendance for users
  function registerAttendance(users, attendanceData) {
    const finalAttendance = [];
    const processedEntries = new Set();

    for (const user of users) {
      const matchingAttendance = attendanceData.find(
        (attendance) =>
          attendance["Name (Original Name)"] === user.name &&
          attendance["User Email"] === user.email
      );

      const key = `${user.id}-${formatDateToYmmdd(
        matchingAttendance ? matchingAttendance["Join Time"] : ""
      )}`;

      if (!processedEntries.has(key)) {
        processedEntries.add(key);

        if (matchingAttendance) {
          finalAttendance.push({
            user: user.id,
            duration: matchingAttendance["Duration (Minutes)"],
            status: "PRESENT",
            inoutTime: `${matchingAttendance["Join Time"]} - ${matchingAttendance["Leave Time"]}`,
          });
        } else {
          finalAttendance.push({
            user: user.id,
            duration: null,
            status: "ABSENT",
            inoutTime: null,
          });
        }
      }
    }

    return finalAttendance;
  }

  async function postAttendanceData(finalAttendanceData, storedData) {
    const masterData = [];
    const processedEntries = new Set();

    for (const attendanceEntry of finalAttendanceData) {
      const { user, inoutTime } = attendanceEntry;
      const key = `${user}-${inoutTime}`;

      if (!processedEntries.has(key)) {
        processedEntries.add(key);

        // Check if the user and meeting combination is already present in the stored data
        const isEntryAlreadyPosted = storedData.some(
          (storedEntry) =>
            storedEntry.user === user && storedEntry.inoutTime === inoutTime
        );

        if (!isEntryAlreadyPosted) {
          masterData.push(attendanceEntry);
        } else {
          console.log(
            `Attendance data for user ${user} and inoutTime ${inoutTime} already exists. Skipping...`
          );
        }
      }
    }

    try {
      if (masterData.length > 0) {
        const response = await axios.post(
          "https://apiforjapa.dailywith.me/records/attendance",
          masterData
        );
        console.log("Attendance data posted successfully:", response.data);
      } else {
        console.log("No new attendance data to post.");
      }
    } catch (error) {
      console.error("Error posting attendance data:", error.message);
    }
  }

  // Call the function to get the final attendance data
  //   axios
  //     .get("https://apiforjapa.dailywith.me/records/users")
  //     .then((response) => {
  //       let users = response.data.records;
  //       const finalAttendanceData = registerAttendance(users, fres);
  //       postAttendanceData(finalAttendanceData);
  //     });

  // console.log(fres.length > 0?fres[2]["User Email"]:"not there");
  // console.log(fres);

  return (
    <div>
      <>
        <div className="mt-5 lg:mt-8 flex flex-col items-center">
          <div className="flex flex-row gap-2">
            <div className=" sm:w-auto">
              <form>
                <label htmlFor="file-input" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                    file:border-0
                    file:mr-4
                    file:py-3 file:px-4
                    file:bg-blue-500 hover:file:bg-blue-600 file:text-white file:font-semibold"
                  onChange={handleFileChange}
                />
                <button
                  className=""
                  type="button"
                  onClick={() => {
                    setPres(fres);
                  }}
                >
                  filter
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      <tr>
                        <td className="h-px w-auto whitespace-nowrap">
                          <div className="px-6 py-2 flex items-center gap-x-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Name (Original Name)
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-auto whitespace-nowrap">
                          <div className="px-6 py-2 flex items-center gap-x-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              User Email
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-auto whitespace-nowrap">
                          <div className="px-6 py-2 flex items-center gap-x-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Join Time
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-auto whitespace-nowrap">
                          <div className="px-6 py-2 flex items-center gap-x-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Leave Time
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-auto whitespace-nowrap">
                          <div className="px-6 py-2 flex items-center gap-x-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Duration (Minutes)
                            </span>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {pres.map((v, i) => (
                        <tr key={i}>
                          <td className="h-px w-auto whitespace-nowrap">
                            <div className="px-6 py-2 flex items-center gap-x-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {v[`Name (Original Name)`]}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-auto whitespace-nowrap">
                            <div className="px-6 py-2 flex items-center gap-x-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {v[`User Email`]}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-auto whitespace-nowrap">
                            <div className="px-6 py-2 flex items-center gap-x-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {v[`Join Time`]}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-auto whitespace-nowrap">
                            <div className="px-6 py-2 flex items-center gap-x-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {v[`Leave Time`]}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-auto whitespace-nowrap">
                            <div className="px-6 py-2 flex items-center gap-x-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {v[`Duration (Minutes)`]}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  className="rounded-md bg-green-700 p-2 px-10 ml-[45%] mt-7 text-white"
                  type="button"
                  onClick={submitHandler}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
