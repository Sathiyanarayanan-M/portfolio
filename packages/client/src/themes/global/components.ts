import * as Mui from "@mui/material";

// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     balsamiqHead: true;
//   }
// }

// interface ExtendedTypographyOptions extends Mui.TypographyVariants {
//   balsamiqHead: React.CSSProperties;
// }

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    shaded: true;
  }
}

export const Components = (): Pick<Mui.ThemeOptions, "components"> => {
  const theme = Mui.useTheme()
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
          },
          h4: {
            fontFamily: "Amiri",

          }
        },
        // defaultProps: {
        //   color: theme.palette.common.white
        // }
      },
      // MuiButton: {
      //   variants: [
      //     {
      //       props: { variant: 'shaded' },
      //       style: {
      //         color: theme.palette.common.white,
      //         backgroundColor: "#393E46",
      //         "&:hover": {
      //           backgroundColor: "#393E46",
      //         },
      //         border: '1px solid #00ADB5'
      //       },
      //     },
      //   ],
      // },
      // MuiInputBase: {
      //   styleOverrides: {
      //     input: {
      //       color: theme.palette.common.white,
      //       '&:-webkit-autofill': {
      //         transitionDelay: '9999s',
      //         transitionProperty: 'background-color, color',
      //       },
      //     },
      //   },
      // },
    },
  };
};
