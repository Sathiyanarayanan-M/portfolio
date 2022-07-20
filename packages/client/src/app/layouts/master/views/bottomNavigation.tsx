import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";

export function BottomNavigation() {
  const { pathname } = Router.useLocation();
  const pathList = pathname.split("/");

  const navigate = Router.useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <Mui.Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Mui.Stack direction="row" alignItems="center">
          {Constants.Navigations.map((navigation) => (
            <Mui.Box
              key={navigation.value}
              sx={{ width: "100%", height: "100%", p: 2 }}
            >
              <Mui.Stack
                component={Mui.ButtonBase}
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{
                  width: "100%",
                  backgroundColor: (theme) =>
                    pathList.includes(navigation.value)
                      ? "primary.100"
                      : theme.palette.primary.main,
                  color: (theme) =>
                    pathList.includes(navigation.value)
                      ? "primary.main"
                      : "common.white",
                  transition: "all 0.3s",
                  borderRadius: "15px",
                  p: 1,
                }}
                onClick={() => handleNavigation(navigation.path)}
              >
                <navigation.icon sx={{ marginBottom: "2px" }} />
                {pathList.includes(navigation.value) ? (
                  <Mui.Typography noWrap color="common.white">
                    {navigation.name}
                  </Mui.Typography>
                ) : null}
              </Mui.Stack>
            </Mui.Box>
          ))}
        </Mui.Stack>
      </Mui.Box>
      <Mui.Toolbar />
    </React.Fragment>
  );
}
