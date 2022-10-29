import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const Main = () => {
  // const particlesInit = async (main: Engine) => await loadFull(main);
  const location = Router.useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <React.Fragment>
      {/* <Mui.Box zIndex={-1}>
        <Particles
          init={particlesInit}
          params={Constants.TsParticlesConfig() as any}
        />
      </Mui.Box> */}
      <Mui.Box display={{ md: "block", xs: "none" }}>
        <Layouts.Master.Views.Appbar />
      </Mui.Box>
      <Mui.Box
        sx={{
          minHeight: { xs: "calc(100vh - 88px)", md: "calc(100vh - 300px)" },
          zIndex: 1,
        }}
      >
        <Router.Outlet />
      </Mui.Box>
      <Mui.Box>
        <Layouts.Master.Views.Footer />
      </Mui.Box>
      <Mui.Box display={{ md: "none", xs: "block" }}>
        <Layouts.Master.Views.BottomNavigation />
      </Mui.Box>
    </React.Fragment>
  );
};
