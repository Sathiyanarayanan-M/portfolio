import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const PasswordField = (props: Mui.TextFieldProps) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Mui.TextField
      type={visible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <Mui.InputAdornment position="end">
            <Mui.IconButton
              aria-label="toggle password visibility"
              onClick={() => setVisible(!visible)}
              edge="end"
            >
              {visible ? <MuiIcons.VisibilityOff /> : <MuiIcons.Visibility />}
            </Mui.IconButton>
          </Mui.InputAdornment>
        ),
      }}
      label="Password"
      {...props}
    />
  );
};
