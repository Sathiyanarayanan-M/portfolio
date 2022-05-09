import * as Mui from "@mui/material";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => {
  return {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: ["Poppins", "sans-serif"].join(", "),
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
          },
        },
      },
    },
  };
};
