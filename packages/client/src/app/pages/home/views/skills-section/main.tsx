import React, { MutableRefObject } from "react";
import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/home/views/styles.module.scss";

export const Main = () => {
  return (
    <Mui.Box className={styles.skills__section}>
      <Mui.Typography className={styles.section__title}>
        My Skills
      </Mui.Typography>
    </Mui.Box>
  );
};
