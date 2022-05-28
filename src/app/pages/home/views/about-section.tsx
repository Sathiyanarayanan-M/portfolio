import * as Mui from "@mui/material";
import * as ReactSwiper from "swiper/react";
import * as Pages from "src/app/pages";

import Thinking from "src/assets/img/thinking.svg";

export const AboutSection = () => {
  const useSwiperSlide = ReactSwiper.useSwiperSlide();
  return (
    <Mui.Stack
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%"
    >
      <Mui.Typography variant="h4" color="primary" sx={{ m: 3 }}>
        About Me
      </Mui.Typography>

      <Mui.Grid container spacing={2}>
        {Pages.Home.Constants.aboutMe.map((item, index) => (
          <Mui.Grid item xs={12} sm={6} md={4} key={index}>
            <Mui.Typography>
              {item.title}: {item.value}
            </Mui.Typography>
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Stack>
  );
};
