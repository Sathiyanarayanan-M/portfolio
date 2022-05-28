import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as ReactSwiper from "swiper/react";
import Thinking from "src/assets/img/thinking.svg";

export const HomeSection = () => {
  const swiper = ReactSwiper.useSwiper();
  return (
    <React.Fragment>
      <Mui.Stack
        alignItems="center"
        justifyContent="center"
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{ height: "100%" }}
      >
        <Mui.Box>
          <Mui.Typography variant="h4">
            Hi, I am Sathiyanarayanan
          </Mui.Typography>
          <Mui.Typography variant="h5">
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

      <Mui.Box
        component={Mui.ButtonBase}
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          // color: "#fff",
          // backgroundColor: "primary.main",
          textAlign: "center",
        }}
        onClick={() => swiper.slideNext()}
      >
        <MuiIcons.KeyboardDoubleArrowDown />
      </Mui.Box>
    </React.Fragment>
  );
};
