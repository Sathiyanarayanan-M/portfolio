import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "src/app/pages/home/views/styles.module.scss";

export const Main = () => {
  const prevSlideArrowRef = React.useRef(null);
  const nextSlideArrowRef = React.useRef(null);

  const {
    data: projectData = [],
    isLoading,
    error,
  } = Pages.Home.Hooks.useProjectList();

  return (
    <Mui.Box className={styles.project__section}>
      <Mui.Typography className={styles.section__title}>
        My Projects
      </Mui.Typography>
      <Mui.Stack
        alignItems="center"
        justifyContent="center"
        sx={{ display: isLoading ? "flex" : "none" }}
      >
        <Mui.CircularProgress sx={{ color: "primary.300" }} />
      </Mui.Stack>

      <Mui.Stack
        direction="row"
        alignItems="center"
        sx={{ display: isLoading ? "none" : "flex" }}
      >
        <Mui.Box className={styles.arrow__left} ref={prevSlideArrowRef}>
          <MuiIcons.ChevronLeft />
        </Mui.Box>
        <Swiper
          loop={true}
          speed={500}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: nextSlideArrowRef.current,
            prevEl: prevSlideArrowRef.current,
          }}
          modules={[Navigation]}
        >
          {projectData.map((item, idx) => (
            <SwiperSlide className={styles.swiper__slide} key={idx}>
              <Mui.Box
                className={styles.project__box}
                onClick={() => window.open(item.detailsUrl)}
              >
                <Mui.CardMedia
                  component="img"
                  src={item.image}
                  className={styles.project__image}
                  sx={{
                    // width: { md: 200, xs: "80vw" },
                    // height: { md: 330, xs: 300 },
                    //   maxHeight: { md: 300 },
                    //   maxWidth: { md: 150 },
                    //   margin: "auto",
                    objectFit: "contain",
                  }}
                />
                <Mui.Box>
                  <Mui.Typography className={styles.project__title}>
                    {item.title}
                  </Mui.Typography>
                  <Mui.Typography className={styles.project__description}>
                    {item.description}
                  </Mui.Typography>
                </Mui.Box>
              </Mui.Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Mui.Box className={styles.arrow__right} ref={nextSlideArrowRef}>
          <MuiIcons.ChevronRight />
        </Mui.Box>
      </Mui.Stack>
    </Mui.Box>
  );
};
