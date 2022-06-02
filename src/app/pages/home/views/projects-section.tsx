import React from "react";
import * as Mui from "@mui/material";
import * as ReactSwiper from "swiper/react";
import * as SwiperJs from "swiper";
import * as Firestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ProjectsSection = () => {
  const [projectData, setProjectData] = React.useState<
    Firestore.DocumentData[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { dataSnapShot } = Hooks.useFirestore();

  React.useEffect(() => {
    setIsLoading(true);
    dataSnapShot("projects", (snapshot) => {
      setProjectData(snapshot.docs.map((doc) => doc.data()));
      setIsLoading(false);
    });
  }, []);
  return (
    <Mui.Box
      sx={{
        width: "100%",
        height: "100%",
        // p: 10,
      }}
    >
      <Mui.Box>
        <Mui.Typography noWrap>My Project List:</Mui.Typography>
      </Mui.Box>
      <ReactSwiper.Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20987500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[SwiperJs.Autoplay, SwiperJs.Pagination, SwiperJs.Navigation]}
        style={{
          width: "100%",
          height: "90%",
        }}
        loop={true}
      >
        {projectData.map((item, index) => (
          <ReactSwiper.SwiperSlide key={index}>
            <Pages.Home.Views.ProjectCard
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl={item.detailsUrl}
            />
          </ReactSwiper.SwiperSlide>
        ))}
      </ReactSwiper.Swiper>
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
