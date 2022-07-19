import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";

export const Appbar = () => {
  const { pathname } = Router.useLocation();
  const pathList = pathname.split("/");

  const scrollTrigger = Mui.useScrollTrigger({
    threshold: 30,
    disableHysteresis: true,
    target: document.getElementById("root") || window,
  });

  const navigate = Router.useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const TabBoxStyles = (open: boolean) =>
    open
      ? {
          "&:before, &:after": {
            content: "''",
            position: "absolute",
            height: "10px",
            width: "20px",
            bottom: 0,
          },
          "&:after": {
            right: "-20px",
            borderRadius: "0 0 0 20px",
            boxShadow: "-10px 0 0 0 #f5f7fa",
          },
          "&:before": {
            left: "-20px",
            borderRadius: "0 0 20px 0",
            boxShadow: "10px 0 0 0 #f5f7fa",
          },
        }
      : {};

  return (
    <React.Fragment>
      <Mui.AppBar sx={{ bgcolor: "inherit" }} elevation={0}>
        <Mui.Toolbar>
          <Mui.Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              width: "100%",
              pt: 1,
            }}
          >
            {Constants.Navigations.map((navigation) => (
              <Mui.Box
                key={navigation.value}
                component={Mui.ButtonBase}
                disableTouchRipple
                onClick={() => handleNavigation(navigation.path)}
                sx={{
                  bgcolor: pathList.includes(navigation.value)
                    ? "primary.100"
                    : "primary.main",
                  color: pathList.includes(navigation.value)
                    ? "primary.main"
                    : "common.white",
                  position: "relative",
                  borderRadius: "15px",
                  py: 1,
                  px: 2,
                }}
              >
                <navigation.icon />
                <Mui.Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    marginLeft: "6px",
                  }}
                >
                  {navigation.name}
                </Mui.Typography>
              </Mui.Box>
            ))}
          </Mui.Stack>
        </Mui.Toolbar>
      </Mui.AppBar>
      <Mui.Toolbar />
    </React.Fragment>
  );
};
