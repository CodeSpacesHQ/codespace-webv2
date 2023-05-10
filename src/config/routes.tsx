import { RouteObject, useRoutes } from "react-router";
import { Home, About, JobOpp } from "../pages";
import { SharedLayout } from "../components/layout/SharedLayout";
import Contact from "../pages/contact/Contact";

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "/job", element: <JobOpp /> },
        { path: "/contact", element: <Contact />}
      ],
    },
  ];
  return useRoutes(routes);
}
