import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import * as Formik from "formik";
import * as Pages from "src/app/pages";

export const Main = () => {
  return (
    <Mui.Box sx={{ mt: 20, mb: 10 }}>
      <Mui.Box>
        <Mui.Typography
          textAlign="center"
          variant="h4"
          //   mb={5}
          color="common.white"
        >
          Contact Me
        </Mui.Typography>
        <Mui.Typography
          textAlign="center"
          //   variant="body2"
          mb={5}
          color="common.white"
        >
          Any Questions, Just write us a message!
        </Mui.Typography>
      </Mui.Box>
      <Mui.Stack direction="row" justifyContent="space-between" spacing={2}>
        <Mui.Box sx={{ width: "100%" }}>
          <Pages.Home.Views.ContactSection.InfoCard />
        </Mui.Box>
        <Mui.Box sx={{ width: "100%" }}>
          <Formik.Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              console.log(values);

              // actions.setSubmitting(false);
            }}
          >
            <Formik.Form>
              <Pages.Home.Views.ContactSection.ContactCard />
            </Formik.Form>
          </Formik.Formik>
        </Mui.Box>
      </Mui.Stack>
    </Mui.Box>
  );
};
