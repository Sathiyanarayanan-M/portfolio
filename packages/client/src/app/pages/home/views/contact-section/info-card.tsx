import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";
import * as AppConstants from "src/app/constants";
import styles from "src/app/pages/home/views/styles.module.scss";

export const InfoCard = () => {
  return (
    <Mui.Stack spacing={3} className={styles.info__card}>
      <Mui.Box>
        <Mui.Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
          Contact Information
        </Mui.Typography>
        <Mui.Typography>
          Fill the form in the right and i will get back to you within 24 hrs
        </Mui.Typography>
      </Mui.Box>
      <Mui.Stack spacing={2} direction="row" alignItems="center">
        <MuiIcons.Phone />
        <Mui.Typography>+91 9842250566</Mui.Typography>
      </Mui.Stack>
      <Mui.Stack spacing={2} direction="row" alignItems="center">
        <MuiIcons.Email />
        <Mui.Typography>msathiya1622@gmail.com</Mui.Typography>
      </Mui.Stack>
      <Mui.Stack spacing={2} direction="row" alignItems="center">
        <MuiIcons.LocationOn />
        <Mui.Typography>309, south street, thirubuvanam.</Mui.Typography>
      </Mui.Stack>
      <Mui.Button
        LinkComponent="a"
        target="_blank"
        rel="noopener noreferrer"
        // variant="outlined"
        className={styles.resume__btn}
        startIcon={
          <Mui.Box className={styles.icon__container}>
            <MuiIcons.DownloadRounded
              fontSize="small"
              className={styles.icon}
            />
          </Mui.Box>
        }
        download
        href={Hooks.useCDNBucket("docs/Sathiyanarayanan.pdf")}
      >
        Get my resume
      </Mui.Button>
      <Mui.Stack direction="row" spacing={2}>
        {AppConstants.socialList().map((item, idx) => (
          <Mui.IconButton
            // size="small"
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
  );
};
