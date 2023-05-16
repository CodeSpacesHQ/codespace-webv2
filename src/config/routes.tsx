import { RouteObject, useRoutes } from "react-router";
import { Home, About, JobOpp, Donate, Shop } from "../pages";
import { SharedLayout } from "../components/layout/SharedLayout";
import Contact from "../pages/contact/Contact";
import Perks from "../pages/perks/Perks";
import ScrollToTop from "../components/ScrollToTop";

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <>
          <SharedLayout />
          <ScrollToTop />
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "/job", element: <JobOpp /> },
        { path: "/contact", element: <Contact /> },
        { path: "/donate", element: <Donate /> },
        { path: "/shop", element: <Shop /> },
        { path: "/perks", element: <Perks /> },
      ],
    },
  ];
  return useRoutes(routes);
}
