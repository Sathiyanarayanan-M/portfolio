import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import Thinking from "src/assets/img/thinking.svg";

export const HomeSection = () => {
  const socialList = [
    {
      label: "LinkedIn",
      value: "linkenin",
      icon: <MuiIcons.LinkedIn />,
    },
    {
      label: "Github",
      value: "github",
      icon: <MuiIcons.GitHub />,
    },
    {
      label: "Twitter",
      value: "twitter",
      icon: <MuiIcons.Twitter />,
    },
  ];
  return (
    <Mui.Box sx={{ px: 2 }}>
      <Mui.Stack
        // sx={{ mt: 3 }}
        alignItems="center"
        justifyContent="space-between"
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Mui.Box>
          <Mui.Typography
            color="primary.100"
            sx={{
              fontFamily: "'Texturina', serif",
              fontSize: { xs: "2em", sm: "2.5em", md: "3em" },
            }}
          >
            Hi, I am Sathiyanarayanan
          </Mui.Typography>
          <Mui.Typography variant="h5" color="primary.200">
            A Software Engineer based in Kumbakonam, Tamil Nadu.
          </Mui.Typography>
        </Mui.Box>
        <Mui.Box>
          <Mui.CardMedia
            component="img"
            src={Thinking}
            sx={{
              width: { md: 510, xs: 310 },
              height: { md: 218, xs: 180 },
              objectFit: "contain",
            }}
          />
        </Mui.Box>
      </Mui.Stack>
      <Mui.Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ mt: 15 }}
      >
        <Mui.Typography sx={{ mr: 1, fontSize: "1em" }}>
          Check Out My
        </Mui.Typography>
        <Mui.Stack direction="row" spacing={2}>
          {socialList.map((item) => (
            <FramerMotion.MotionConfig reducedMotion="user">
              {/* <Refresh onClick={() => setCount(count + 1)} /> */}
              {/* <div className="example-container"> */}
              <FramerMotion.motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: 180 }}
                transition={{
                  repeat: 1,
                  repeatType: "reverse",
                  duration: 0.3,
                }}
              >
                <Mui.IconButton
                  sx={{ bgcolor: "primary.100" }}
                  key={item.value}
                  disableRipple
                >
                  {item.icon}
                </Mui.IconButton>
              </FramerMotion.motion.div>
              {/* </div> */}
            </FramerMotion.MotionConfig>
          ))}
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Box>
  );
};
