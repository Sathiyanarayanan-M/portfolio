import React from "react";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const Main = () => {
  return (
    <React.Fragment>
      <Layouts.Master.Views.Appbar />
      <Router.Outlet />
    </React.Fragment>
  );
};
