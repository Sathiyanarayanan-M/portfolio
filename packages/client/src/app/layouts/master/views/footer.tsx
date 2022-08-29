import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as AppConstants from "src/app/constants";
import styles from "src/app/layouts/master/views/styles.module.scss";

export const Footer = () => {
  return (
    <footer>
      <Mui.Typography sx={{ textAlign: "center", py: 4 }}>
        © {new Date().getFullYear()}. All Rights Reserved.
      </Mui.Typography>
    </footer>
  );
};
