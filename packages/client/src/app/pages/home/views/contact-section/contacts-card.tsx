import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FramerMotion from "framer-motion";

export const ContactCard = () => {
  const formikContext = Formik.useFormikContext<ContactFormType.FormValues>();

  return (
    <Mui.Stack
      component={Mui.Paper}
      spacing={2}
      sx={{ p: 2, bgcolor: (theme) => theme.palette.background.paper }}
    >
      <Mui.TextField
        label="Name"
        name="name"
        type="text"
        variant="outlined"
        fullWidth
        onChange={formikContext.handleChange}
        value={formikContext.values.name}
        required
        helperText={<Formik.ErrorMessage name="name" />}
      />
      <Mui.Stack spacing={2} direction="row">
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
        <Mui.TextField
          label="Phone"
          name="phone"
          type="text"
          variant="outlined"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.phone}
          helperText={<Formik.ErrorMessage name="phone" />}
        />
      </Mui.Stack>
      <Mui.Grid item xs={12}>
        <Mui.TextField
          label="Message"
          name="message"
          type="text"
          variant="outlined"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.message}
          required
          helperText={<Formik.ErrorMessage name="message" />}
        />
      </Mui.Grid>
      <MuiLab.LoadingButton
        loading={formikContext.isSubmitting}
        variant="contained"
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
