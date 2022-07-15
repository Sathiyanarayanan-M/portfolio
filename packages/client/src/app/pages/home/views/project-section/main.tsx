import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as ReactSwiper from "swiper/react";
import * as SwiperJS from "swiper";
import * as Pages from "src/app/pages";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

export const Main = () => {
  const {
    data: projectData = [],
    isLoading,
    error,
  } = Pages.Home.Hooks.useProjectList();
  const [selectedProject, setSelectedProject] = React.useState<string | number>(
    0
  );

  let projectDataDuplicate = [
    ...projectData,
    ...projectData,
    ...projectData,
    ...projectData,
  ];

  const first4Slide = projectDataDuplicate.slice(0, 3);

  const handleSelectProject = React.useCallback((value: string | number) => {
    setSelectedProject(value);
  }, []);

  return (
    <Mui.Box>
      {/* <Mui.Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Project List
      </Mui.Typography> */}
      {!!selectedProject && (
        <Pages.Home.Views.ProjectSection.ProjectDetailView
          projectData={projectData.find(
            (item) => item.title === selectedProject
          )}
          handleSelectedProject={handleSelectProject}
        />
      )}
      <Mui.Grid container spacing={3}>
        {projectDataDuplicate?.map((item, index) => (
          <Mui.Grid xs={3} item key={index}>
            <Pages.Home.Views.ProjectSection.ProjectPaper
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl={item.detailsUrl}
              handleSelectProject={handleSelectProject}
            />
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Box>
  );
};
