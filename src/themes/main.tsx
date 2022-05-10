import * as Mui from "@mui/material";
import React from "react";
import * as Themes from "src/themes";

export const Main = ({ children }: Main.Props) => {
  const theme = Mui.createTheme({
    ...Themes.Global.Shared(),
  });

  return (
    <Mui.ThemeProvider theme={theme}>
      <Themes.CssBaseline.Main />
      {children || null}
    </Mui.ThemeProvider>
  );
};

export declare namespace Main {
  export interface Props {
    children?: React.ReactNode;
  }
}
