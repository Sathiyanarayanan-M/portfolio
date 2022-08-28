import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as Layouts from "src/app/layouts";
import { Engine } from "tsparticles-engine";
import * as Constants from "src/constants";

export const Main = () => {
  const particlesInit = async (main: Engine) => await loadFull(main);

  return (
    <React.Fragment>
      <Mui.Box zIndex={-1}>
        {/* <Particles
          init={particlesInit}
          params={Constants.TsParticlesConfig() as any}
        /> */}
      </Mui.Box>
      <Mui.Box display={{ md: "block", xs: "none" }}>
        <Layouts.Master.Views.Appbar />
      </Mui.Box>
      <Mui.Box zIndex={1}>
        <Router.Outlet />
        <Layouts.Master.Views.Footer />
      </Mui.Box>

      <Mui.Box display={{ md: "none", xs: "block" }}>
        <Layouts.Master.Views.BottomNavigation />
      </Mui.Box>
    </React.Fragment>
  );
};
