import React from "react";
import * as Mui from "@mui/material";

export const ShadedTextField = (props: Mui.TextFieldProps) => {
  return (
    <Mui.TextField
      InputProps={{
        sx: {
          color: "white",
          fontFamily: "monospace",
        },
      }}
      InputLabelProps={{
        style: {
          color: "white",
          fontSize: "14px",
        },
      }}
      focused
      type="text"
      variant="filled"
      {...props}
    />
  );
};
