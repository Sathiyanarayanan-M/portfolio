import React from "react";
import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const ThemeDropdown = (props: IThemeDropDown.Props) => {
  const { handleThemeChange, theme } = props;
  return (
    <Mui.Box sx={{ minWidth: 120 }}>
      <Mui.FormControl fullWidth>
        <Mui.InputLabel id="theme-select">Age</Mui.InputLabel>
        <Mui.Select
          labelId="theme-select"
          value={theme}
          label="Theme"
          onChange={(event) => handleThemeChange(event.target.value)}
        >
          {Pages.Playings.Pages.CodeEditor.Constants.ThemeList.map((item) => (
            <Mui.MenuItem key={item.value} value={item.value}>
              {item.label}
            </Mui.MenuItem>
          ))}
        </Mui.Select>
      </Mui.FormControl>
    </Mui.Box>
  );
};

export namespace IThemeDropDown {
  export interface Props {
    handleThemeChange: (value: string) => void;
    theme: string;
  }
}
