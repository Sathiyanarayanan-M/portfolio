import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Contexts from "src/app/contexts";

export const Main = () => {
  const { utils } = React.useContext(Contexts.UtilsContext);

  return (
    <React.Fragment>
      <Mui.Box display={{ md: "block", xs: "none" }}>
        <Layouts.Master.Views.Appbar />
      </Mui.Box>
      <Mui.Box
        sx={{
          height: {
            xs: `calc(100% - ${utils["bottom-navigation-height"]}px)`,
            md: `calc(100% - ${utils["top-navigation-height"]}px)`,
          },
        }}
      >
        <Router.Outlet />
      </Mui.Box>
      <Mui.Box display={{ md: "none", xs: "block" }}>
        <Layouts.Master.Views.BottomNavigation />
      </Mui.Box>
    </React.Fragment>
  );
};
