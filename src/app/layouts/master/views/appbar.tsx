import React from "react";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as Router from "react-router-dom";

export const Appbar = () => {
  const { pathname } = Router.useLocation();
  const pathList = pathname.split("/");

  const navigate = Router.useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <Mui.AppBar color="primary">
        <Mui.Toolbar>
          <Mui.Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              width: "100%",
              minHeight: "inherit",
              pt: 1,
            }}
          >
            {Constants.Navigations.map((navigation) => (
              <Mui.Box
                component={Mui.ButtonBase}
                onClick={() => handleNavigation(navigation.path)}
                sx={{
                  p: 2,
                  backgroundColor: (theme) =>
                    pathList.includes(navigation.value)
                      ? "white"
                      : theme.palette.primary.main,
                  borderRadius: pathList.includes(navigation.value)
                    ? "20px 20px 6px 6px"
                    : 0,
                  transition: "all 0.3s",
                }}
              >
                <Mui.Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: (theme) =>
                      pathList.includes(navigation.value)
                        ? theme.palette.primary.main
                        : "rgba(255, 255, 255, 0.5)",
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
