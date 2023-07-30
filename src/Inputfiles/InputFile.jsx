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
        preusers.push(e.name);
      });
      console.log(preusers);
      fres.forEach((e) => {
        console.log(e["Name (Original Name)"]);
        if (!preusers.includes(e["Name (Original Name)"])) {
          let data = {
            name: e["Name (Original Name)"],
            email: e["User Email"],
          };
          axios
            .post(url, data)
            .then((response) => {
              console.log("Request successful!", response.data);
            })
            .catch((error) => {
              console.error("Error submitting data:", error);
            });
        }
      });
    });
  }

  // Custom function to parse the date string and return a valid Date object
  function parseDate(dateString) {
    // Adjust the format according to the input date string (here it assumes 'DD/MM/YY hh:mm:ss a')
    return parse(dateString, "dd/MM/yy hh:mm:ss a", new Date());
  }

  function postInAttendance() {
    // Call the function to get the final attendance data
  axios
  .get("https://apiforjapa.dailywith.me/records/users")
  .then((response) => {
    let users = response.data.records;
    const finalAttendanceData = registerAttendance(users, fres);
    postAttendanceData(finalAttendanceData);
  });
  }

  function submitHandler() {
    postInMeeting();
    postInUsers();
    postInAttendance();
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

    for (const user of users) {
      const matchingAttendance = attendanceData.find(
        (attendance) =>
          attendance["Name (Original Name)"] === user.name &&
          attendance["User Email"] === user.email
      );

      if (matchingAttendance) {
        // const { duration, inoutTime } = calculateDurationAndInOutTime(
        //   matchingAttendance["Join Time"],
        //   matchingAttendance["Leave Time"]
        // );

        finalAttendance.push({
          user: user.id,
          meeting: 30723, // Set the meeting ID accordingly
          duration: matchingAttendance["Duration (Minutes)"],
          status: "PRESENT",
          inoutTime: `${matchingAttendance["Join Time"]} - ${matchingAttendance["Leave Time"]}`,
        });
      } else {
        finalAttendance.push({
          user: user.id,
          meeting: 30723,
          duration: null,
          status: "ABSENT",
          inoutTime: null,
        });
      }
    }

    return finalAttendance;
  }

  async function postAttendanceData(finalAttendanceData) {
    try {
      const postRequests = finalAttendanceData.map((attendanceEntry) =>
        axios.post('https://apiforjapa.dailywith.me/records/attendance', attendanceEntry)
      );
  
      const responses = await Promise.all(postRequests);
      responses.forEach((response) => {
        console.log('Attendance data posted successfully:', response.data);
      });
    } catch (error) {
      console.error('Error posting attendance data:', error.message);
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

  //   console.log(fres);
  //   console.log(pres);

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
