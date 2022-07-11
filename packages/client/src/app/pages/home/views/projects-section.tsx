import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as ReactSwiper from "swiper/react";
import * as SwiperJS from "swiper";
import * as Pages from "src/app/pages";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

export const ProjectsSection = () => {
  const {
    data: projectData = [],
    isLoading,
    error,
  } = Pages.Home.Hooks.useProjectList();

  let projectDataDuplicate = [...projectData, ...projectData];
  console.log(projectData);

  return (
    <Mui.Box>
      <Mui.Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Project List
      </Mui.Typography>
      {/* <MuiLab.Masonry columns={{ xs: 1, sm: 3, md: 5 }} spacing={2}> */}
      <ReactSwiper.Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[SwiperJS.Autoplay]}
        breakpoints={{
          499: {
            slidesPerView: 2,
          },

          699: {
            slidesPerView: 3,
          },
          1099: {
            slidesPerView: 4,
          },
        }}
      >
        {projectDataDuplicate?.map((item, index) => (
          <ReactSwiper.SwiperSlide key={index}>
            <Pages.Home.Views.ProjectCardNew
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl={item.detailsUrl}
            />
          </ReactSwiper.SwiperSlide>
        ))}
      </ReactSwiper.Swiper>
      {/* </MuiLab.Masonry> */}
      {/* <ReactSwiper.Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20987500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[SwiperJs.Autoplay, SwiperJs.Pagination, SwiperJs.Navigation]}
        style={{
          width: "100%",
          height: "90%",
          marginTop: "10px",
        }}
        loop={true}
      >
        
      </ReactSwiper.Swiper> */}
      {/* <Mui.Grid container spacing={3}>
        {isLoading
          ? [...Array(5).keys()].map((index) => (
              <Mui.Grid item xs={12} md={4} key={index}>
                <Mui.Skeleton variant="rectangular" height={150} />
                <Mui.Skeleton />
                <Mui.Skeleton width="60%" />
              </Mui.Grid>
            ))
          : data.map((item, index) => (
              <Mui.Grid xs={12} md={4} item key={index}>
                <Pages.Home.Views.ProjectCard
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  actionUrl={item.detailsUrl}
                />
              </Mui.Grid>
            ))}
      </Mui.Grid> */}
    </Mui.Box>
  );
};
