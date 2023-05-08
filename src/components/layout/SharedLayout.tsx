import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router"

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}