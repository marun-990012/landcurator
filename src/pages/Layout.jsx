
import { Outlet } from "react-router-dom";
import MenuBar from "./Menubar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

