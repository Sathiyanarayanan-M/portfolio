import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as ReactSwiper from "swiper/react";
import Thinking from "src/assets/img/thinking.svg";

export const HomeSection = () => {
  const swiper = ReactSwiper.useSwiper();
  return (
    <Mui.Stack
      sx={{ mt: 3 }}
      alignItems="center"
      justifyContent="center"
      direction={{
        xs: "column",
        md: "row",
      }}
    >
      <Mui.Box>
        <Mui.Typography
          variant="h2"
          color="primary.main"
          sx={{ fontFamily: "'Texturina', serif" }}
        >
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
  );
};
