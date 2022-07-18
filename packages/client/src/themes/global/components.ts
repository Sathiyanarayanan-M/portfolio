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
declare module '@mui/material/TextField' {
  interface TextFieldPropsVariantOverrides {
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
          }
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'shaded' },
            style: {
              color: theme.palette.common.white,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              ":hover": {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',

              }
            },
          },
        ],
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&:-webkit-autofill': {
              transitionDelay: '9999s',
              transitionProperty: 'background-color, color',
            },
          },
        }
      },
    },
  };
};
