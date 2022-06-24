import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";

export const Content = () => {
  const { signInWithEmailAndPassword } = Hooks.useFirebaseAuth();

  return (
    <Mui.Box sx={{ m: 3 }}>
      <Formik.Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          const result = await signInWithEmailAndPassword(
            values.email,
            values.password
          );
          actions.setSubmitting(false);
        }}
      >
        <Formik.Form>
          <Pages.Auth.Views.LoginForm />
        </Formik.Form>
      </Formik.Formik>
    </Mui.Box>
  );
};
