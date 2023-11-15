import ReactDOM from "react-dom/client";
import React from "react";
import "./main.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home, { ReturnFetch } from "../components/Home";
import Error from "../components/Error";
import CountryDetails from "../components/CountryDetails";
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
        // loader: { ReturnFetch },
      },
      {
        path: "/:county",
        element: <CountryDetails />,
      },
    ],
  },
]); */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path=""  element={<Home />} />
      <Route path="/:county" loader={ReturnFetch}  element={<CountryDetails />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
