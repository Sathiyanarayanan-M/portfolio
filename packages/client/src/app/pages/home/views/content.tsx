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
    <Mui.Box sx={{ width: "100%", height: "100%" }}>
      <Parallax.Parallax
        ref={parallaxRef}
        pages={2}
        style={{
          top: "0",
          left: "0",
          // backgroundImage: Hooks.useCDNBucket("stars.svg", true),
          // backgroundColor: "rgba(120, 104, 230)",
        }}
      >
        <Parallax.ParallaxLayer
          offset={0}
          speed={0.1}
          // onClick={() => parallaxRef.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Mui.Box p={2} width={"100%"}>
            <Pages.Home.Views.HomeSection />
            <Mui.ButtonBase
              onClick={() => parallaxRef.current.scrollTo(1)}
              sx={{
                mt: 10,
                position: "absolute",
                left: "50%",
              }}
              disableRipple
            >
              <MuiIcons.KeyboardDoubleArrowDown />
            </Mui.ButtonBase>
          </Mui.Box>
        </Parallax.ParallaxLayer>

        <Parallax.ParallaxLayer
          offset={1}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundImage: Hooks.useCDNBucket("stars.svg", true),

            // backgroundColor: "rgba(120, 104, 230, 0.3)",
          }}
          // onClick={() => parallaxRef.current.scrollTo(0)}
        >
          <Mui.Box width={"100%"} height={500} p={2}>
            <Pages.Home.Views.ProjectsSection />
          </Mui.Box>
        </Parallax.ParallaxLayer>
      </Parallax.Parallax>
    </Mui.Box>
  );
};
