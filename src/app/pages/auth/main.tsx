import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";

export const Main = () => {
  return (
    <Mui.Box>
      <Pages.Auth.Views.Content />
    </Mui.Box>
  );
};
