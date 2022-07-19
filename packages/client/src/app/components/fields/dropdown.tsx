import React from "react";
import * as Mui from "@mui/material";

export const Dropdown = (props: IThemeDropDown.Props) => {
  const {
    onChange,
    value,
    dataList,
    label = "",
    size = "small",
    selectProps = {},
  } = props;
  return (
    <Mui.FormControl fullWidth size={size}>
      {/* <Mui.InputLabel color="primary">{label}</Mui.InputLabel> */}
      <Mui.Typography>{label}</Mui.Typography>
      <Mui.Select
        value={value}
        // label={label}
        onChange={(event) => onChange(event.target.value as string)}
        {...selectProps}
      >
        {dataList.map((item) => (
          <Mui.MenuItem key={item.value} value={item.value}>
            {item.label}
          </Mui.MenuItem>
        ))}
      </Mui.Select>
    </Mui.FormControl>
  );
};

export namespace IThemeDropDown {
  export interface Props {
    onChange: (value: string | number) => void;
    value: string | number;
    dataList: {
      label: string;
      value: string | number;
    }[];
    label?: string;
    size?: "small" | "medium";
    selectProps?: Mui.SelectProps;
  }
}
