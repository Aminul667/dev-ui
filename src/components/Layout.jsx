import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="w-96 h-screen m-auto p-4 rounded-md bg-background relative">
      {/* <div>
        <Title></Title>
      </div> */}
      <div className="flex items-center justify-center ">
        <Outlet />
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;
