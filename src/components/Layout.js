import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="md:flex md:flex-col md:gap-y-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
