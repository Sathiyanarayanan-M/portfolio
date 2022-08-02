import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";

export const InfoCard = () => {
  const socialList = [
    {
      label: "LinkedIn",
      value: "linkenin",
      link: "https://www.linkedin.com/in/sathiyanarayanan-m",
      icon: <MuiIcons.LinkedIn sx={{ color: "common.white" }} />,
    },
    {
      label: "Github",
      value: "github",
      link: "https://github.com/Sathiyanarayanan-M",
      icon: <MuiIcons.GitHub sx={{ color: "common.white" }} />,
    },
    {
      label: "Twitter",
      value: "twitter",
      link: "https://twitter.com/sathiya1622",
      icon: <MuiIcons.Twitter sx={{ color: "common.white" }} />,
    },
    {
      label: "StackOverflow",
      value: "stack-overflow",
      link: "https://stackoverflow.com/users/14388598/sathiyanarayanan",
      icon: (
        <i className="fab fa-stack-overflow" style={{ color: "#f5f7fa" }} />
      ),
    },
  ];
  return (
    <Mui.Stack spacing={2} sx={{ p: 2, color: "common.white" }}>
      <Mui.Typography variant="h6">Contact Information</Mui.Typography>
      <Mui.Typography>
        Fill the form in the right and i will get back to you within 24 hrs
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
          <Mui.IconButton
            LinkComponent="a"
            key={item.value}
            href={item.link}
            target="_blank"
          >
            {item.icon}
          </Mui.IconButton>
        ))}
      </Mui.Stack>
      <Mui.Button
        LinkComponent="a"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        sx={{ width: "fit-content" }}
        download
        href={Hooks.useCDNBucket("docs/Sathiyanarayanan.pdf")}
      >
        Get My Resume
      </Mui.Button>
    </Mui.Stack>
  );
};
