import { useRoutes } from "react-router";
import Home from "../pages/Home";
import { About } from "../pages";

//Add your routes here
export function Routes(){
    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        }
    ])
}

