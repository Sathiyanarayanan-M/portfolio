import * as Mui from "@mui/material";

// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     balsamiqHead: true;
//   }
// }

// interface ExtendedTypographyOptions extends Mui.TypographyVariants {
//   balsamiqHead: React.CSSProperties;
// }

export const Components = (): Pick<Mui.ThemeOptions, "components"> => {
  return {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: '"Mukta", sans-serif',
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
          },
          h6: {
            fontFamily: "'Balsamiq Sans', cursive",
            fontWeight: 500
          }
        },
      },
    },
  };
};
