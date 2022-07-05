import * as Mui from "@mui/material";
import * as ReactSwiper from "swiper/react";
import * as Swiper from "swiper";
import * as Pages from "src/app/pages";

export const Content = () => {
  return (
    <Mui.Stack spacing={20} p={2} sx={{ bgcolor: "#f5f7fa" }}>
      <Mui.Box>
        <Pages.Home.Views.HomeSection />
      </Mui.Box>
      <Mui.Box>
        <Pages.Home.Views.ProjectsSection />
      </Mui.Box>
    </Mui.Stack>
  );
};
