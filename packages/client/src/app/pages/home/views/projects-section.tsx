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

  let projectDataDuplicate = [
    ...projectData,
    ...projectData,
    ...projectData,
    ...projectData,
  ];

  const first4Slide = projectDataDuplicate.slice(0, 3);

  return (
    <Mui.Box>
      {/* <Mui.Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Project List
      </Mui.Typography> */}
      <Mui.Grid container spacing={0}>
        {projectDataDuplicate?.map((item, index) => (
          <Mui.Grid xs={3} item key={index}>
            <Pages.Home.Views.ProjectPaper
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl={item.detailsUrl}
            />
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Box>
  );
};
