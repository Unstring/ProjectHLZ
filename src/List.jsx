import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import TableHeader from "./Components/TableHeader";

function NotUpdated() {
  let date = new Date();
  let month = date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth();
  let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  let today = date.getFullYear() + "-" + month + "-" + day;
  // console.log(date.getDate().length);
  return (
    // <tr>
    //   <td className="h-px w-px whitespace-nowrap">
    //     <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
    //       <div className="flex items-center gap-x-3">
    //         <img
    //           className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
    //           src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
    //           alt="Image Description"
    //         />
    //         <div className="grow">
    //           <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
    //             First Lastname{" "}
    //           </span>
    //           <span className="block text-sm text-gray-500">
    //             firstname@some.where
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </td>
    //   <td className="h-px w-72 whitespace-nowrap">
    //     <div className="px-6 py-3">
    //       <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
    //         Senior Prabhu
    //       </span>
    //       <span className="block text-sm text-gray-500">
    //         senior@haldia.passout
    //       </span>
    //     </div>
    //   </td>
    //   <td className="h-px w-px whitespace-nowrap">
    //     <div className="px-6 py-3">
    //       <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
    //         <svg
    //           className="w-2.5 h-2.5"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={16}
    //           height={16}
    //           fill="currentColor"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    //         </svg>
    //         <span>Status</span>
    //       </span>
    //     </div>
    //   </td>
    //   <td className="h-px w-px whitespace-nowrap">
    //     <div className="px-6 py-3">
    //       <div className="flex items-center gap-x-3">
    //         <span className="text-xs text-gray-500"></span>
    //         <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
    //           <div
    //             className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
    //             role="progressbar"
    //             style={{
    //               width: (10 / 12) * Math.floor(Math.random() * 100) + "%",
    //             }}
    //             aria-valuenow={100}
    //             aria-valuemin={0}
    //             aria-valuemax={120}
    //           />
    //         </div>
    //       </div>
    //       <span className="ml-3 align-middle text-sm text-gray-500">
    //         00 hours 00 minutes
    //       </span>
    //     </div>
    //   </td>
    //   <td className="h-px w-px whitespace-nowrap">
    //     <div className="px-6 py-3">
    //       <span className="text-sm text-gray-500">{today}</span>
    //     </div>
    //   </td>
    //   <td className="h-px w-px whitespace-nowrap">
    //     <div className="px-6 py-1.5">
    //       <div
    //         className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline font-medium"
    //         href="#"
    //       >
    //         Details
    //       </div>
    //     </div>
    //   </td>
    // </tr>
    <>
      <div className="grow my-36">
        {" "}
        <span className="block text-sm font-semibold text-gray-800 text-center dark:text-gray-200">
          {" "}
          Data not updated till now{" "}
        </span>{" "}
      </div>
    </>
  );
}

function Simmer(props) {
  return (
    <>
      <div className="grow my-36">
        <span className="block text-sm font-semibold text-gray-800 text-center dark:text-gray-200">
        <div
          className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
        </span>
      </div>
    </>
  );
}

function Rows(props) {
  return (
    <>
      <tr>
        {/* <td className="h-px w-px whitespace-nowrap">
          <div className="pl-6 py-3">
            <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-at-with-checkboxes-1"
                        />
                        <span className="sr-only">Checkbox</span>
                      </label>
          </div>
        </td> */}
        <td className="h-px w-px whitespace-nowrap">
          <div className="pl-2 lg:pl-3 xl:pl-0 py-3">
            <div className="flex items-center md:pl-4 gap-x-1">
              <img
                className="inline-block h-[2.375rem] w-[2.375rem] hidden md:block  rounded-full"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                alt="Image Description"
              />
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
        <td className="h-px w-72 hidden lg:table-cell whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
              Senior Prabhu
            </span>
            <span className="block text-sm text-gray-500">
              Senior@haldia.passout
            </span>
          </div>
        </td>
        <td className="h-px w-px hidden lg:table-cell md:table-cell whitespace-nowrap">
          <div className="px-6 py-3">
            {props.data.status == "PRESENT" ? (
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
                {props.data.date}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {props.data.date}
              </span>
            )}
          </div>
        </td>
        <td className="h-px w-px hidden lg:table-cell md:table-cell whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-3">
              <span className="text-xs text-gray-500"></span>
              <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                  role="progressbar"
                  style={{ width: (10 / 12) * props.data.totalMinutes + "%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={120}
                />
                {/* {console.log(props.data)} */}
              </div>
            </div>
            <span className="ml-3 align-middle text-sm text-gray-500">
              {props.data.duration}
            </span>
          </div>
        </td>
        {/* <td className="h-px w-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-500">{props.data.date}</span>
          </div>
        </td> */}
        {/* <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <a
            className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href="#"
          >
            Details
          </a>
        </div>
      </td> */}
        <td className="h-px w-px whitespace-nowrap">
          <a
            className="block"
            // href="javascript:;"
            data-hs-overlay={
              "#" +
              props.data.japaParticipants.email
                .split("@")[0]
                .replaceAll(".", "")
            }
          >
            <div className="px-2 py-1.5">
              <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
                View
              </div>
            </div>
          </a>
          <Model
            id={props.data.japaParticipants.email
              .split("@")[0]
              .replaceAll(".", "")}
            name={props.data.japaParticipants.name}
            email={props.data.japaParticipants.email}
            status={props.data.status}
            duration={props.data.duration}
            date={props.data.date}
            jointime={props.data.joinTime}
            leavetime={props.data.leaveTime}
          />
        </td>
      </tr>
    </>
  );
}

function Model(props) {
  return (
    <div
      id={props.id}
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
          <div className="relative overflow-hidden min-h-[8rem] bg-gray-900 text-center rounded-t-xl">
            {/* Close Button */}
            <div className="absolute top-2 right-2">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-bg-gray-on-hover-cards"
                data-hs-remove-element="#hs-ai-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {/* End Close Button */}
            {/* SVG Background Element */}
            <figure className="absolute inset-x-0 bottom-0">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
              >
                <path
                  fill="currentColor"
                  className="fill-white dark:fill-gray-800"
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                />
              </svg>
            </figure>
            {/* End SVG Background Element */}
          </div>
          <div className="relative z-10 -mt-12">
            {/* Icon */}
            <span className="mx-auto flex justify-center items-center w-[62px] h-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
              </svg>
            </span>
            {/* End Icon */}
          </div>
          {/* Body */}
          <div className="p-4 sm:p-7 overflow-y-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {props.name}
              </h3>
              <p className="text-sm text-gray-500">{props.email}</p>
            </div>
            {/* Grid */}
            <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
              <div>
                <span className="block text-xs uppercase text-gray-500">
                  Facilitator:
                </span>
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Senior Prabhu
                </span>
              </div>
              {/* End Col */}
              <div>
                <span className="block text-xs uppercase text-gray-500">
                  Status:
                </span>
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  {props.status}
                </span>
              </div>
              {/* End Col */}
              <div>
                <span className="block text-xs uppercase text-gray-500">
                  Duration:
                </span>

                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  {props.duration}
                </span>
                {/* <div className="flex items-center gap-x-2">
                <svg
                  className="w-5 h-5"
                  width={400}
                  height={248}
                  viewBox="0 0 400 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M254 220.8H146V26.4H254V220.8Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={400} height="247.2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  •••• 4242
                </span>
              </div> */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            <div className="mt-5 sm:mt-10">
              <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                Summary
              </h4>
              <ul className="mt-3 flex flex-col">
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>Date</span>
                    <span>{props.date}</span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>Join Time</span>
                    <span>{props.jointime}</span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>Leave Time</span>
                    <span>{props.leavetime}</span>
                  </div>
                </li>
                {/* <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                <div className="flex items-center justify-between w-full">
                  <span>Amount paid</span>
                  <span>$316.8</span>
                </div>
              </li> */}
              </ul>
            </div>
            {/* Button */}
            <div className="mt-5 flex justify-end gap-x-2">
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                Open
              </a>
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                </svg>
                Calender
              </a>
            </div>
            {/* End Buttons */}
            {/* <div className="mt-5 sm:mt-10">
            <p className="text-sm text-gray-500">
              If you have any questions, please contact us at{" "}
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                example@site.com
              </a>{" "}
              or call at{" "}
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                href="tel:+1898345492"
              >
                +1 898-34-5492
              </a>
            </p>
          </div> */}
          </div>
          {/* End Body */}
        </div>
      </div>
    </div>
  );
}

function Thead() {
  return (
    <thead className="bg-gray-50 dark:bg-slate-800">
      <tr className="">
        {/* <th scope="col" className="pl-6 py-3 text-left">
                        <label
                          htmlFor="hs-at-with-checkboxes-main"
                          className="flex"
                        >
                          <input
                            type="checkbox"
                            className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-at-with-checkboxes-main"
                          />
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </th> */}
        <th scope="col" className="pl-6 lg:pl-6 sm:pl-0 pr-6 py-3 text-center">
          <div className="flex items-center gap-x-2">
            <span className="text-xs ml-4 font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Name
            </span>
          </div>
        </th>
        <th scope="col" className="px-6 py-3 hidden lg:table-cell text-left">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Facilatator
            </span>
          </div>
        </th>
        <th scope="col" className="px-6 py-3 hidden lg:table-cell md:table-cell text-left">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Status
            </span>
          </div>
        </th>
        <th scope="col" className="px-6 py-3 hidden lg:table-cell md:table-cell text-left">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              japa Duration
            </span>
          </div>
        </th>
        {/* <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Date
                          </span>
                        </div>
                      </th> */}
        <th scope="col" className="px-6 py-3 text-right" />
      </tr>
    </thead>
  );
}

export default function App() {
  function getTodayDateInFormat() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);
  const [url, setUrl] = useState(
    "https://copyhlzglobalregistration-production.up.railway.app/v1/attendance/japa/fetchAll?date=" +
      getTodayDateInFormat()
      // "2023-07-24"
  );
  const [filtereddata, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData(url);
  }, []);
  // console.log(data);
  const fetchData = async (url) => {
    try {
      const response = await axios.post(url, {});
      setData(response.data);
      setFilteredData(response.data);
      if (response.data.length == 0) {
        setIsUpdated(false);
      }
      // console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-2 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* Header */}
                <TableHeader
                  fetchData={fetchData}
                  setUrl={setUrl}
                  url={url}
                  setData={setData}
                  data={data}
                  setFilteredData={setFilteredData}
                  setIsUpdated={setIsUpdated}
                />
                {/* End Header */}
                {/* Table */}
                {data.length == 0 ? (
                  <>{isUpdated ? <Simmer /> : <NotUpdated />}</>
                ) : (
                  <>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <Thead />
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {filtereddata.map((o, i) => {
                          return <Rows data={o} key={i} />;
                        })}
                      </tbody>
                    </table>
                  </>
                )}
                {/* End Table */}
                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {filtereddata.length}
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
      {/* <Model/> */}
    </>
  );
}
