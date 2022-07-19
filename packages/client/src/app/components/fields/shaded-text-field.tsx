import React from "react";
import * as Mui from "@mui/material";

export const ShadedTextField = (props: Mui.TextFieldProps) => {
  return (
    <Mui.TextField
      color="primary"
      InputProps={{
        sx: {
          color: "white",
          fontFamily: "monospace",
          bgcolor: "primary.100",
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
      sx={{
        bgcolor: "primary.100",
      }}
      {...props}
    />
  );
};
