import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";

export const LoginForm = () => {
  const formikContext = Formik.useFormikContext<LoginFormType.FormValues>();
  return (
    <Mui.Box>
      <Mui.Stack justifyContent="center" alignItems="center" spacing={3}>
        <Mui.TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.email}
          required
          helperText={<Formik.ErrorMessage name="email" />}
        />
        <Components.Fields.PasswordField
          name="password"
          variant="outlined"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.password}
          required
          helperText={<Formik.ErrorMessage name="password" />}
        />
        <Mui.Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={formikContext.isSubmitting}
          fullWidth
        >
          Submit
        </Mui.Button>
      </Mui.Stack>
    </Mui.Box>
  );
};

export namespace LoginFormType {
  export interface FormValues {
    email: string;
    password: string;
  }
}
