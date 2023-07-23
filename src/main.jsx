// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import('preline')
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import List from './List.jsx'
import Details from './Details.jsx'
import Nav from './common/Nav'
import Foot from './common/Foot'
import Error from "./Components/Error"


const AppLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Foot />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
