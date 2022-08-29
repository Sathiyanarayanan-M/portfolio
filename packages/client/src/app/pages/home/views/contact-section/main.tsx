import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import * as Formik from "formik";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";
import styles from "src/app/pages/home/views/styles.module.scss";

export const Main = () => {
  const { setSnack } = React.useContext(Contexts.SnackbarContext);

  const { mutate, isLoading } =
    Pages.Home.Views.ContactSection.Hooks.useFeedbackPost({
      callbacks: {
        onSuccess: () => {
          setSnack({
            open: true,
            message: "Thank you for contact me 💚",
            severity: "success",
          });
        },
      },
    });

  return (
    <Mui.Box>
      <Mui.Typography className={styles.section__title}>
        Contact Me
      </Mui.Typography>

      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        rowGap={2}
      >
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
            onSubmit={(values, action) => {
              mutate(values, {
                onSuccess: () => {
                  action.resetForm();
                },
              });
            }}
          >
            <Formik.Form>
              <Pages.Home.Views.ContactSection.ContactCard
                isLoading={isLoading}
              />
            </Formik.Form>
          </Formik.Formik>
        </Mui.Box>
      </Mui.Stack>
    </Mui.Box>
  );
};
