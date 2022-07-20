import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";

export const CustomLoadingButton = (props: Mui.ButtonProps & PropsType) => {
  const { loading, text, ...rest } = props;

  return (
    <Mui.Button
      style={{
        pointerEvents: loading ? "none" : "all",
      }}
      {...rest}
    >
      {loading ? <Mui.CircularProgress size={20} /> : text}
    </Mui.Button>
  );
};

export interface PropsType {
  loading: boolean;
  text: string | number;
}
