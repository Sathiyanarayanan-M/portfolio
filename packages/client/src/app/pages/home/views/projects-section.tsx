import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as ReactSwiper from "swiper/react";
import * as SwiperJs from "swiper";
import * as Pages from "src/app/pages";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ProjectsSection = () => {
  const {
    data: projectData = [],
    isLoading,
    error,
  } = Pages.Home.Hooks.useProjectList();

  let projectDataDuplicate = [...projectData, ...projectData];

  const MasonryItem = Mui.styled(Mui.Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Mui.Box>
      <Mui.Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Project List
      </Mui.Typography>
      <MuiLab.Masonry columns={3} spacing={2}>
        {projectDataDuplicate?.map((item, index) => (
          <MasonryItem key={index}>
            <Pages.Home.Views.ProjectCardNew
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl={item.detailsUrl}
            />
          </MasonryItem>
        ))}
      </MuiLab.Masonry>
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
