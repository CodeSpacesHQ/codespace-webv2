import { RouteObject, useRoutes } from "react-router";
import { Home, About, JobOpp, Donate, Shop, Faq } from "../pages";
import { SharedLayout } from "../components/layout/SharedLayout";
import Contact from "../pages/contact/Contact";
import Perks from "../pages/perks/Perks";
import ScrollToTop from "../components/ScrollToTop";
import CommunityPage from "../pages/community/Community";
import ErrorPage from "../pages/404/Error";

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
        { path: "/faq", element: <Faq /> },
        { path: "/community", element: <CommunityPage /> },
        { path: "/404", element: <ErrorPage /> },
      ],
    },
  ];
  return useRoutes(routes);
}
