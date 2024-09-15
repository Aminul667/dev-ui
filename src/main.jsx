import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import RecentIncident from "./components/RecentIncident.jsx";
import DoctorVisit from "./components/DoctorVisit.jsx";
import Family from "./components/Family.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recent-incident",
        element: <RecentIncident />,
      },
      {
        path: "/doctor-visit",
        element: <DoctorVisit />,
      },
      {
        path: "/family",
        element: <Family />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
