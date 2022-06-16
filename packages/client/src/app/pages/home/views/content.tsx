import * as Mui from "@mui/material";
import * as ReactSwiper from "swiper/react";
import * as Swiper from "swiper";
import * as Pages from "src/app/pages";

export const Content = () => {
  return (
    <Mui.Box>
      <ReactSwiper.Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Swiper.Mousewheel]}
        style={{
          height: "100vh",
        }}
        nested={true}
      >
        <ReactSwiper.SwiperSlide style={{ position: "relative" }}>
          <Pages.Home.Views.HomeSection />
        </ReactSwiper.SwiperSlide>
        <ReactSwiper.SwiperSlide>
          <Pages.Home.Views.ProjectsSection />
        </ReactSwiper.SwiperSlide>
      </ReactSwiper.Swiper>
    </Mui.Box>
  );
};
