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
    <Mui.Box sx={{ px: 2 }}>
      <Mui.Stack justifyContent="center" sx={{ height: "100vh" }}>
        <Pages.Home.Views.HomeSection />
      </Mui.Stack>
      <Mui.Box>
        <Pages.Home.Views.ProjectsSection />
      </Mui.Box>
      <Mui.Box>
        <Pages.Home.Views.ContactSection />
      </Mui.Box>
    </Mui.Box>
  );
};
