import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";
import * as Contexts from "src/app/contexts";

export function BottomNavigation() {
  const containerRef = React.useRef();
  const { setUtils } = React.useContext(Contexts.UtilsContext);

  const { pathname } = Router.useLocation();
  const pathList = pathname.split("/");
  const isWidowChanged = Mui.useMediaQuery(
    Mui.useTheme().breakpoints.down("md")
  );

  const navigate = Router.useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  React.useEffect(() => {
    if (containerRef.current) {
      setUtils({
        "bottom-navigation-height": (containerRef.current as any)
          ?.clientHeight as string,
      });
    }
  }, [containerRef, isWidowChanged]);
  return (
    <Mui.Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: (theme) => theme.palette.primary.main,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Mui.Stack direction="row" alignItems="center" ref={containerRef}>
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
                <Mui.Typography noWrap>{navigation.name}</Mui.Typography>
              ) : null}
            </Mui.Stack>
          </Mui.Box>
        ))}
      </Mui.Stack>
    </Mui.Box>
  );
}
