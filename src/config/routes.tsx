import { RouteObject, useRoutes } from "react-router";
import { Home, About, JobOpp } from "../pages";
import { SharedLayout } from "../components";

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "/jobOpp", element: <JobOpp /> },
      ],
    },
  ];
  return useRoutes(routes);
}
