import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";

export const Content = () => {
  return (
    <Mui.Box sx={{ m: 3 }}>
      <Formik.Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => {}}
      >
        <Formik.Form>
          <Pages.Auth.Views.LoginForm />
        </Formik.Form>
      </Formik.Formik>
    </Mui.Box>
  );
};
