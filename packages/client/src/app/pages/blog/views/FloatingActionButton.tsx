import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";
import styles from "src/app/pages/blog/views/styles.module.scss";

export const FloatingActionButton = () => {
  const navigate = Router.useNavigate();
  return (
    <Mui.IconButton
      size="large"
      disableRipple
      className={styles.fab}
      onClick={() => navigate("/blog/post-blog")}
    >
      <MuiIcons.Create />
    </Mui.IconButton>
  );
};
