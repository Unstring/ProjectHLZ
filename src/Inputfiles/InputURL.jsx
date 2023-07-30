import axios from "axios";
import { useState } from "react";
import { read, utils } from "xlsx";

export default function SheetJSReactAoO() {
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([]);
  const [input, setInput] = useState("");

  /* Fetch and update the state once */
  // useEffect(() => {
  //   (async () => {
  //     const f = await (
  //       await fetch("https://sheetjs.com/pres.xlsx")
  //     ).arrayBuffer();
  //     const wb = read(f); // parse the array buffer
  //     const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  //     const data = utils.sheet_to_json(ws); // generate objects
  //     setPres(data); // update state
  //   })();
  // }, []);

  // const clickHandler = async () => {
  //   try {
  //     // Step 1: Make an Axios GET request to fetch the data
  //     const response = await axios.get(input);

  //     // Step 2: Convert the response data into an ArrayBuffer
  //     const arrayBuffer = response.data;

  //     // Step 3: Parse the ArrayBuffer to read the workbook and extract the worksheet data
  //     const wb = read(arrayBuffer);
  //     const ws = wb.Sheets[wb.SheetNames[0]];

  //     // Step 4: Generate objects from the worksheet data
  //     const data = utils.sheet_to_json(ws);

  //     // Step 5: Update the state (Here, we'll just log the data, but you can setPres(data) as in your original code)
  //     setPres(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error.message);
  //   }
  // };

  async function clickHandler() {
    let f = "";
    input ?  f = await (await fetch(input)).arrayBuffer(): f = await (await fetch("https://files.inct.tech/data.xlsx")).arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    setPres(data); // update state
    console.log(data);
  }

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="mt-5 lg:mt-8 flex flex-col items-center">
        <div className="flex flex-row gap-2">
        <div className=" sm:w-auto">
          <label htmlFor="hero-input" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="https://files.inct.tech/data.xlsx"
            onChange={inputHandler}
          />
        </div>
        <button
          className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          onClick={clickHandler}
        >
          Get Data
        </button>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <p className="dark:text-white text-black">https://files.inct.tech/data.xlsx</p> */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
