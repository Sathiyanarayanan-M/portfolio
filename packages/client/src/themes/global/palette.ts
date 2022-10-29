
import * as Mui from "@mui/material";

export const Palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
    palette: {
        primary: {
            main: "#b46e53",
            100: '#5e2d1f',
            200: '#54bab9',
            300: '#5f5e5e',
            400: '#3f3d56',
            500: 'rgba(180, 110, 83, 0.2)'
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