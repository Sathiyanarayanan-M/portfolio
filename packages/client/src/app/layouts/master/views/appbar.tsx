import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as AppConstants from "src/app/constants";
import styles from "src/app/layouts/master/views/styles.module.scss";

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
      <Mui.AppBar position="static" sx={{ bgcolor: "inherit" }} elevation={0}>
        <Mui.Toolbar disableGutters>
          <Mui.Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 10, px: 15, width: "100%" }}
          >
            {/* {Constants.Navigations.map((navigation) => (
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
            ))} */}

            <Mui.Stack direction="row" spacing={4}>
              {Constants.Navigations.map((navigation, idx) => (
                <Mui.Typography
                  component={Router.Link}
                  to={navigation.path}
                  key={idx}
                  variant="h6"
                  className={styles.appbar__navigation}
                >
                  {navigation.name}
                </Mui.Typography>
              ))}
            </Mui.Stack>

            <Mui.Stack direction="row" spacing={2}>
              {AppConstants.socialList().map((item, idx) => (
                <Mui.IconButton
                  size="large"
                  disableRipple
                  LinkComponent="a"
                  key={idx}
                  sx={{ color: "common.black" }}
                  href={item.link}
                  target="_blank"
                  className={styles.social__icon}
                >
                  {item.icon}
                </Mui.IconButton>
              ))}
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Toolbar>
      </Mui.AppBar>
      {/* <Mui.Toolbar /> */}
    </React.Fragment>
  );
};
