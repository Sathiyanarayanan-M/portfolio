import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as AppConstants from "src/app/constants";
import styles from "src/app/layouts/master/views/styles.module.scss";

export const Footer = () => {
  return (
    <footer>
      <Mui.Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 15, pb: 2, width: "100%" }}
      >
        <Mui.Typography>
          © {new Date().getFullYear()}. All Rights Reserved.
        </Mui.Typography>
        <Mui.Stack direction="row" spacing={2}>
          {AppConstants.socialList().map((item, idx) => (
            <Mui.IconButton
              size="large"
              disableRipple
              LinkComponent="a"
              key={idx}
              sx={{ color: "common.black" }}
              href={item.link}
              target="_blank"
              className={styles.social__icon}
            >
              {item.icon}
            </Mui.IconButton>
          ))}
        </Mui.Stack>
      </Mui.Stack>
    </footer>
  );
};
