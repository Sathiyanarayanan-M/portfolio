import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FramerMotion from "framer-motion";
import * as Components from "src/app/components";

export const ContactCard = () => {
  const formikContext = Formik.useFormikContext<ContactFormType.FormValues>();

  return (
    <Mui.Stack spacing={2} sx={{ p: 2 }}>
      <Components.Fields.ShadedTextField
        label="Name"
        name="name"
        type="text"
        fullWidth
        onChange={formikContext.handleChange}
        value={formikContext.values.name}
        required
        helperText={<Formik.ErrorMessage name="name" />}
      />
      <Mui.Stack spacing={2} direction="row">
        <Components.Fields.ShadedTextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.email}
          required
          helperText={<Formik.ErrorMessage name="email" />}
        />
        <Components.Fields.ShadedTextField
          label="Phone"
          name="phone"
          type="text"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.phone}
          helperText={<Formik.ErrorMessage name="phone" />}
        />
      </Mui.Stack>
      <Mui.Grid item xs={12}>
        <Components.Fields.ShadedTextField
          label="Message"
          name="message"
          type="text"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.message}
          required
          helperText={<Formik.ErrorMessage name="message" />}
        />
      </Mui.Grid>
      <MuiLab.LoadingButton
        loading={formikContext.isSubmitting}
        variant="shaded"
        type="submit"
      >
        Submit
      </MuiLab.LoadingButton>
    </Mui.Stack>
  );
};

export namespace ContactFormType {
  export interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
}
