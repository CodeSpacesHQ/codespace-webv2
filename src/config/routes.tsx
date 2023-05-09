import { RouteObject, useRoutes } from "react-router";
import { Home, About, JobOpp, EmailTemplate } from "../pages";
import { SharedLayout } from "../components/layout/SharedLayout";
 

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "/job", element: <JobOpp /> },
      ],
    },
    { path: "/email", element: <EmailTemplate /> },
  ];
  return useRoutes(routes);
}
