
import * as Mui from "@mui/material";

export const Palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
    palette: {
        primary: {
            main: "#b46e53",
            100: '#393E46',
            200: '#54bab9',
            300: '#5f5e5e'
        },
        common: {
            white: '#fafafa',
            black: '#161515',
        }
    },
});

// Previous Pallete
// palette: {
//     primary: {
//         main: "#00ADB5",
//         100: '#393E46',
//     },
//     background: {
//         default: '#7868e6'
//     },
//     common: {
//         white: '#EEEEEE',
//         black: '#222831',
//     }
// },