import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import * as Parallax from "@react-spring/parallax";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Content = () => {
  const parallaxRef = React.useRef<Parallax.IParallax>(null!);
  const scrollButtonRef = React.useRef(null);
  const isInView = FramerMotion.useInView(scrollButtonRef, { once: true });

  return (
    <Mui.Box sx={{ py: 2, px: 15 }}>
      <Pages.Home.Views.IntroSection.Main />
      <Mui.Divider
        sx={{
          my: 10,
          borderColor: "common.black",
        }}
        variant="middle"
      />
      <Pages.Home.Views.SkillsSection.Main />
      {/* <Mui.Box>
        <Pages.Home.Views.ProjectSection.Main />
      </Mui.Box>
      <Mui.Box>
        <Pages.Home.Views.ContactSection.Main />
      </Mui.Box> */}
    </Mui.Box>
  );
};
