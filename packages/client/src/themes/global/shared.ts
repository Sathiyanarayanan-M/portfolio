import * as Mui from "@mui/material";
import * as Themes from "src/themes";

export const Shared = (): Mui.ThemeOptions => {
  const components = Themes.Global.Components();
  const palette = Themes.Global.Palette();

  return {
    ...components,
    ...palette,
  };
};
