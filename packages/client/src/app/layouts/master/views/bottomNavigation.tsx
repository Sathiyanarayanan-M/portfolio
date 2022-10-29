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
          bottom: 12,
          left: 8,
          right: 8,
          bgcolor: "common.white",
          // background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          // backdropFilter: "blur( 4px )",
          // WebkitBackdropFilter: "blur( 4px )",
          borderRadius: "30px",
          // border: "1px solid rgba( 255, 255, 255, 0.18 )",
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Mui.Stack direction="row" alignItems="center">
          {Constants.Navigations.map((navigation) => (
            <Mui.Box
              key={navigation.value}
              sx={{ width: "100%", height: "100%", p: 1 }}
            >
              <Mui.Stack
                component={Mui.ButtonBase}
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                disableRipple
                sx={{
                  width: "fit-content",
                  backgroundColor: (theme) =>
                    pathList.includes(navigation.value)
                      ? "rgba(180, 110, 83, 0.1)"
                      : "transparent",
                  color: (theme) =>
                    pathList.includes(navigation.value)
                      ? "primary.main"
                      : "primary.400",
                  transition: "all 0.3s",
                  borderRadius: "15px",
                  margin: "auto",
                  py: 1,
                  px: 2,
                }}
                onClick={() => handleNavigation(navigation.path)}
              >
                <navigation.icon />
                {pathList.includes(navigation.value) ? (
                  <Mui.Typography noWrap color="parimary.main">
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
