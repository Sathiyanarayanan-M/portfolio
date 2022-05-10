import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const Main = () => {
  const trigger = Mui.useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });
  return (
    <React.Fragment>
      <Layouts.Master.Views.Appbar />
      <Router.Outlet />
    </React.Fragment>
  );
};
