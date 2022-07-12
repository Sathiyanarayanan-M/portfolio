import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import * as Formik from "formik";
import * as Pages from "src/app/pages";

export const ContactSection = () => {
  const socialList = [
    {
      label: "LinkedIn",
      value: "linkenin",
      icon: <MuiIcons.LinkedIn />,
    },
    {
      label: "Github",
      value: "github",
      icon: <MuiIcons.GitHub />,
    },
    {
      label: "Twitter",
      value: "twitter",
      icon: <MuiIcons.Twitter />,
    },
  ];
  return (
    <Mui.Grid container>
      <Mui.Grid item xs={12}>
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
      </Mui.Grid>
      <Mui.Grid item xs={6}>
        <Mui.Stack component={Mui.Paper} spacing={2}>
          <Mui.Typography>Contact Information</Mui.Typography>
          <Mui.Typography>
            Fill the form and i will get back to you within 24 hrs
          </Mui.Typography>
          <Mui.Stack spacing={2} direction="row" alignItems="center">
            <MuiIcons.Phone />
            <Mui.Typography>+91 9842250566</Mui.Typography>
          </Mui.Stack>
          <Mui.Stack spacing={2} direction="row" alignItems="center">
            <MuiIcons.Email />
            <Mui.Typography>+91 9842250566</Mui.Typography>
          </Mui.Stack>
          <Mui.Stack spacing={2} direction="row" alignItems="center">
            <MuiIcons.LocationOn />
            <Mui.Typography>+91 9842250566</Mui.Typography>
          </Mui.Stack>
          <Mui.Stack direction="row">
            {socialList.map((item) => (
              <Mui.IconButton key={item.value}>{item.icon}</Mui.IconButton>
            ))}
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
      <Mui.Grid item xs={6}>
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
            <Pages.Home.Views.ContactCard />
          </Formik.Form>
        </Formik.Formik>
      </Mui.Grid>
    </Mui.Grid>
  );
};
