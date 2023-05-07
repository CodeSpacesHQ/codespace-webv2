import { RouteObject, useRoutes } from "react-router";
import Home from "../pages/home/Home";
import { About } from "../pages";
import { SharedLayout } from "../components";

export function Routes() {
    const routes:RouteObject[] = [
        {
            path: '/',
            element: <SharedLayout />,
            children: [
                { index:true, element: <Home /> },
                { path: 'about', element: <About /> },
            ]
        }
    ]
    return useRoutes(routes)
}
