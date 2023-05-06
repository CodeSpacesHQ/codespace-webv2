import { useRoutes } from "react-router";
import { About, JobOpp, Home } from "../pages";

//Add your routes here
export function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/jobOpp",
      element: <JobOpp />,
    },
  ]);
}
