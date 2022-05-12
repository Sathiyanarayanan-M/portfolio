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
      <Mui.Stack direction="row" alignItems="center">
        {Constants.Navigations.map((navigation) => (
          <Mui.Box
            key={navigation.value}
            sx={{ width: "100%", height: "100%", p: 2 }}
          >
            <Mui.Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
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
                cursor: "pointer",
                borderRadius: "15px",
                p: 1,
              }}
              onClick={() => handleNavigation(navigation.path)}
            >
              <navigation.icon sx={{ marginBottom: "2px" }} />
              {pathList.includes(navigation.value) ? (
                <Mui.Typography>{navigation.name}</Mui.Typography>
              ) : null}
            </Mui.Stack>
          </Mui.Box>
        ))}
      </Mui.Stack>
    </Mui.Box>
  );
}
