import React from "react";
import * as Mui from "@mui/material";

export const Appbar = () => {
  const trigger = Mui.useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });
  console.log(trigger);
  return (
    <React.Fragment>
      <Mui.AppBar
        sx={{
          backgroundColor: (theme) =>
            !trigger ? theme.palette.primary.main : "transparent",
        }}
      >
        <Mui.Toolbar>
          <Mui.Typography>App bar</Mui.Typography>
        </Mui.Toolbar>
      </Mui.AppBar>
      <Mui.Toolbar />
    </React.Fragment>
  );
};
