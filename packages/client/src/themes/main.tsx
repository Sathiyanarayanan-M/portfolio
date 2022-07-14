import * as Mui from "@mui/material";
import CreateCache from "@emotion/cache";
import * as EmotionReact from "@emotion/react";
import React from "react";
import * as Themes from "src/themes";

export const Main = ({ children }: Main.Props) => {
  const theme = Mui.createTheme({
    ...Themes.Global.Shared(),
  });

  const cssCache = CreateCache({
    key: "scss",
    prepend: true,
  });

  return (
    <EmotionReact.CacheProvider value={cssCache}>
      <Mui.StyledEngineProvider injectFirst>
        <Mui.ThemeProvider theme={theme}>
          <Themes.CssBaseline.Main />
          {children || null}
        </Mui.ThemeProvider>
      </Mui.StyledEngineProvider>
    </EmotionReact.CacheProvider>
  );
};

export declare namespace Main {
  export interface Props {
    children?: React.ReactNode;
  }
}
