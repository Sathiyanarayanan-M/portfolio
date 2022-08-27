import React from "react";
import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/home/views/styles.module.scss";

export const Main = () => {
  return (
    <Mui.Box className={styles.experience__section}>
      <Mui.Typography className={styles.section__title}>
        Education & Experience
      </Mui.Typography>
      <Mui.Stack direction="row" justifyContent="space-between">
        <Mui.Box>
          <Mui.Typography className={styles.box__title}></Mui.Typography>
        </Mui.Box>
        <Mui.Box>
          <Mui.Typography className={styles.box__title}></Mui.Typography>
        </Mui.Box>
      </Mui.Stack>
    </Mui.Box>
  );
};
