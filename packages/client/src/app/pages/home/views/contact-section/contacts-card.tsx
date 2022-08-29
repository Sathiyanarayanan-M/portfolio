import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FramerMotion from "framer-motion";
import * as Components from "src/app/components";
import styles from "src/app/pages/home/views/styles.module.scss";

export const ContactCard = (props: ContactFormType.Props) => {
  const formikContext = Formik.useFormikContext<ContactFormType.FormValues>();

  return (
    <Mui.Stack spacing={2} sx={{ p: 2 }} className={styles.contact__card}>
      <Mui.TextField
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
        <Mui.TextField
          label="Email"
          name="email"
          type="email"
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
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.phone}
          helperText={<Formik.ErrorMessage name="phone" />}
        />
      </Mui.Stack>
      <Mui.Grid item xs={12}>
        <Mui.TextField
          multiline
          rows={3}
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
      <Components.MuiComponents.CustomLoadingButton
        fullWidth
        type="submit"
        text="Submit"
        loading={props.isLoading}
        variant="outlined"
        sx={{ textTransform: "none" }}
        className={styles.submit__btn}
      />
    </Mui.Stack>
  );
};

export namespace ContactFormType {
  export interface Props {
    isLoading: boolean;
  }
  export interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
}
