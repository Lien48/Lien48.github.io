import React from "react";
import Navigation from "../navigation/navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navigation />
      {/*Use Outlet to render child route elements */}
      <Outlet />
    </>
  );
};

export default Root;
