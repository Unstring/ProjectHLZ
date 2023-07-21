import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import TableHeader from "./Components/TableHeader";

function Dummy() {
  return (
    <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                      <svg
                        className="max-w-[5rem]"
                        viewBox="0 0 375 428"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M254.509 253.872L226.509 226.872"
                          className="stroke-gray-400 dark:stroke-white"
                          stroke="currentColor"
                          strokeWidth={7}
                          strokeLinecap="round"
                        />
                        <path
                          d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                          className="stroke-gray-400 dark:stroke-white"
                          stroke="currentColor"
                          strokeWidth={7}
                          strokeLinecap="round"
                        />
                        <rect
                          x="270.524"
                          y="221.872"
                          width="137.404"
                          height="73.2425"
                          rx="36.6212"
                          transform="rotate(40.8596 270.524 221.872)"
                          className="fill-gray-400 dark:fill-white"
                          fill="currentColor"
                        />
                        <ellipse
                          cx="133.109"
                          cy="404.372"
                          rx="121.5"
                          ry="23.5"
                          className="fill-gray-400 dark:fill-white"
                          fill="currentColor"
                        />
                        <path
                          d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                          className="stroke-gray-400 dark:stroke-white"
                          stroke="currentColor"
                          strokeWidth={7}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx="96.6084"
                          cy="116.872"
                          rx={9}
                          ry={12}
                          className="fill-gray-400 dark:fill-white"
                          fill="currentColor"
                        />
                        <ellipse
                          cx="172.608"
                          cy="117.872"
                          rx={9}
                          ry={12}
                          className="fill-gray-400 dark:fill-white"
                          fill="currentColor"
                        />
                        <path
                          d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                          className="fill-gray-400 dark:fill-white"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="mt-5 text-sm text-gray-500 dark:text-gray-500">
                        No data to show
                      </p>
                    </div>
                  </div>
  )
}
function Rows(props) {
  return (
    <tr>
      <td className="h-px w-px whitespace-nowrap">
        <div className="pl-6 py-3">
          {/* <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-at-with-checkboxes-1"
                        />
                        <span className="sr-only">Checkbox</span>
                      </label> */}
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
          <div className="flex items-center gap-x-3">
            {/* <img
              className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            /> */}
            <div className="grow">
              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                {props.data.japaParticipants.name}
              </span>
              <span className="block text-sm text-gray-500">
                {props.data.japaParticipants.email}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
            Director
          </span>
          <span className="block text-sm text-gray-500">Human resources</span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <svg
              className="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Present
          </span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex items-center gap-x-3">
            <span className="text-xs text-gray-500"></span>
            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
              <div
                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                role="progressbar"
                style={{ width: (10/12)*(props.data.totalMinutes)+"%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={120}
                />
                {console.log(props.data)}
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500">28 Dec, 12:12</span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <a
            className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href="#"
          >
            Edit
          </a>
        </div>
      </td>
    </tr>
  );
}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://copyhlzglobalregistration-production.up.railway.app/v1/attendance/japa/present?date=2023-07-19",
        {}
      );
      setData(response.data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* Header */}
                <TableHeader />
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="pl-6 py-3 text-left">
                        {/* <label
                      htmlFor="hs-at-with-checkboxes-main"
                      className="flex"
                    >
                      <input
                        type="checkbox"
                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-at-with-checkboxes-main"
                      />
                      <span className="sr-only">Checkbox</span>
                    </label> */}
                      </th>
                      <th
                        scope="col"
                        className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Name
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Facilatator
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Status
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            japa Duration
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Date
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-right" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.length == 0 ? <Dummy/>:(
                    data.map((o,i)=>{
                      return(
                        <Rows data ={o} key={i}/>
                      )
                    }))}
                  </tbody>
                </table>
                {/* End Table */}
                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {data.length}
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                        Prev
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        Next
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </>
  );
}
