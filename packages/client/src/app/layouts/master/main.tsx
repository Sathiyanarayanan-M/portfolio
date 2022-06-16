import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const Main = () => {
  return (
    <React.Fragment>
      <Mui.Box display={{ md: "block", xs: "none" }}>
        <Layouts.Master.Views.Appbar />
      </Mui.Box>
      <Mui.Box>
        <Router.Outlet />
      </Mui.Box>
      <Mui.Box display={{ md: "none", xs: "block" }}>
        <Layouts.Master.Views.BottomNavigation />
      </Mui.Box>
    </React.Fragment>
  );
};
