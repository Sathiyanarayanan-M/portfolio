
import * as Mui from "@mui/material";

export const Palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
    palette: {
        primary: {
            main: "#7868e6",
            // main: "#2980B9",
            light: 'rgba(120, 104, 230, 0.3)',
            100: '#f5f7fa',
            200: '#3f3d56'

        },
        background: {

        },
        common: {
            white: '#f5f7fa',
            black: '#3f3d56'
        }
    },
});