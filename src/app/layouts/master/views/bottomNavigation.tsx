import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";
import * as Router from "react-router-dom";

export function BottomNavigation() {
  const { pathname } = Router.useLocation();
  const pathList = pathname.split("/");

  const navigate = Router.useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <Mui.Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: (theme) => theme.palette.primary.main,
      }}
    >
      <Mui.BottomNavigation>
        {Constants.Navigations.map((navigation) => (
          <Mui.BottomNavigationAction
            key={navigation.value}
            label={navigation.name}
            icon={<navigation.icon sx={{ marginBottom: "2px" }} />}
            showLabel={pathList.includes(navigation.value) ? true : false}
            onClick={() => handleNavigation(navigation.path)}
            sx={{
              backgroundColor: (theme) =>
                pathList.includes(navigation.value)
                  ? "white"
                  : theme.palette.primary.main,
              color: (theme) =>
                pathList.includes(navigation.value)
                  ? theme.palette.primary.main
                  : "rgba(255, 255, 255, 0.5)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Mui.BottomNavigation>
    </Mui.Box>
  );
}
