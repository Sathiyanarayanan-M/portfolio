import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FramerMotion from "framer-motion";

export const InfoCard = () => {
  const socialList = [
    {
      label: "LinkedIn",
      value: "linkenin",
      icon: <MuiIcons.LinkedIn sx={{ color: "common.white" }} />,
    },
    {
      label: "Github",
      value: "github",
      icon: <MuiIcons.GitHub sx={{ color: "common.white" }} />,
    },
    {
      label: "Twitter",
      value: "twitter",
      icon: <MuiIcons.Twitter sx={{ color: "common.white" }} />,
    },
  ];
  return (
    <Mui.Stack spacing={2} sx={{ p: 2, color: "common.white" }}>
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
        <Mui.Typography>msathiya1622@gmail.com</Mui.Typography>
      </Mui.Stack>
      <Mui.Stack spacing={2} direction="row" alignItems="center">
        <MuiIcons.LocationOn />
        <Mui.Typography>309, south street, thirubuvanam.</Mui.Typography>
      </Mui.Stack>
      <Mui.Stack direction="row">
        {socialList.map((item) => (
          <Mui.IconButton key={item.value}>{item.icon}</Mui.IconButton>
        ))}
      </Mui.Stack>
    </Mui.Stack>
  );
};
