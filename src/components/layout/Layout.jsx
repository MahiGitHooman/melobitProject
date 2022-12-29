import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

const Layout = () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
