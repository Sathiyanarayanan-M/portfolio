
import * as Mui from "@mui/material";

export const Palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
    palette: {
        primary: {
            main: "#00ADB5",
            100: '#393E46',
        },
        background: {
            default: '#7868e6'
        },
        common: {
            white: '#EEEEEE',
            black: '#222831',
        }
    },
});