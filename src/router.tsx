import React from "react";
import { createHashRouter } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

const Other = React.lazy(() => import("./Other"));
export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "contact",
        element: <div>contract</div>,
      },
      {
        path: "dashboard",
        element: <div>dashboard</div>,
      },
    ],
  },
  {
    path: "/other/:id",
    element: (
      <React.Suspense fallback={<>loading</>}>
        <Other />
      </React.Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
