import React, { MutableRefObject } from "react";
import * as Mui from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/home/views/styles.module.scss";

const skillSet = () => [
  {
    name: "React",
    value: "react",
  },
  {
    name: "Node JS",
    value: "nodejs",
  },
  {
    name: "Python",
    value: "python",
  },
  {
    name: "HTML",
    value: "html",
  },
  {
    name: "Sass",
    value: "sass",
  },
  {
    name: "Solidity",
    value: "solidity",
  },
  {
    name: "Django",
    value: "django",
  },
  {
    name: "Firebase",
    value: "firebase",
  },
  {
    name: "Flask",
    value: "flask",
  },
  {
    name: "MongoDB",
    value: "mongodb",
  },
  {
    name: "Cassandra",
    value: "cassandra",
  },
  {
    name: "AWS",
    value: "aws",
  },
];
export const Main = () => {
  return (
    <Mui.Box className={styles.skills__section}>
      <Mui.Typography className={styles.section__title}>
        My Skills
      </Mui.Typography>

      <Swiper
        autoplay={{
          delay: 900,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        {skillSet().map((item, idx) => (
          <SwiperSlide>
            <Mui.Stack
              alignItems="center"
              sx={{
                width: 200,
                height: 300,
                bgcolor: "rgba(84, 186, 185, 0.1)",
                p: 3,
                borderRadius: "75px",
                userSelect: "none",
              }}
            >
              <Mui.CardMedia
                component="img"
                src={Hooks.useCDNBucket(`images/skillset/${item.value}.svg`)}
                sx={{
                  // width: { md: 200, xs: "80vw" },
                  // height: { md: 330, xs: 300 },
                  maxHeight: { md: 200 },
                  margin: "auto",
                  objectFit: "contain",
                }}
              />
              <Mui.Typography variant="h6" sx={{ justifyContent: "flex-end" }}>
                {item.name}
              </Mui.Typography>
            </Mui.Stack>
          </SwiperSlide>
        ))}
      </Swiper>

      <Mui.Stack direction="row"></Mui.Stack>
    </Mui.Box>
  );
};
