import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Hooks from "src/app/hooks";

export const Main = () => {
  const trigger = Mui.useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });
  return (
    <React.Fragment>
      <Mui.Box display={{ md: "block", xs: "none" }}>
        <Layouts.Master.Views.Appbar />
      </Mui.Box>
      <Mui.Box sx={{ height: `calc(100% - ${Hooks.useAppBarHeight()}px)` }}>
        <Router.Outlet />
      </Mui.Box>
      <Mui.Box display={{ md: "none", xs: "block" }}>
        <Layouts.Master.Views.BottomNavigation />
      </Mui.Box>
    </React.Fragment>
  );
};
