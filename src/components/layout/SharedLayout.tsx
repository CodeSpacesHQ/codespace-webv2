import Header from "../Header-B";
import Footer from "../Footer-B";
import { Outlet } from "react-router";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
