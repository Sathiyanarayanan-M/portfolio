import * as Mui from "@mui/material";

type MinHeight = {
  minHeight: number;
};

export function useAppBarHeight(): number {
  const {
    mixins: { toolbar },
    breakpoints,
  } = Mui.useTheme();
  const toolbarDesktopQuery = breakpoints.up("sm");
  const toolbarLandscapeQuery = `${breakpoints.up(
    "xs"
  )} and (orientation: landscape)`;
  const isDesktop = Mui.useMediaQuery(toolbarDesktopQuery);
  const isLandscape = Mui.useMediaQuery(toolbarLandscapeQuery);
  let currentToolbarMinHeight;
  if (isDesktop) {
    currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
  } else if (isLandscape) {
    currentToolbarMinHeight = toolbar[toolbarLandscapeQuery];
  } else {
    currentToolbarMinHeight = toolbar;
  }
  return (currentToolbarMinHeight as MinHeight).minHeight;
}
