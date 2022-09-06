import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";
import styles from "src/app/layouts/master/views/styles.module.scss";

export const FloatingActionButton = () => {
  const [inputChecked, setInputChecked] = React.useState(false);
  const navigate = Router.useNavigate();
  return (
    <div className={styles["fab-wrapper"]}>
      <input
        type="checkbox"
        checked={inputChecked}
        className={styles["fab-checkbox"]}
      />
      <Mui.IconButton
        size="large"
        disableRipple
        className={styles["fab"]}
        onClick={() => setInputChecked(!inputChecked)}
      >
        {inputChecked ? <MuiIcons.Clear /> : <MuiIcons.MoreHoriz />}
      </Mui.IconButton>
      <div className={styles["fab-wheel"]}>
        {Constants.Navigations.map((item, idx) => (
          <Mui.IconButton
            size="large"
            onClick={() => navigate(item.path)}
            className={`${styles["fab-action"]} ${styles[`fab-action-${idx}`]}`}
          >
            <item.icon />
          </Mui.IconButton>
        ))}
      </div>
    </div>
  );
};
{
  /* */
}
