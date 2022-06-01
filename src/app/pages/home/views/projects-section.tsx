import React from "react";
import * as Mui from "@mui/material";
import * as ReactSwiper from "swiper/react";
import * as Firestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const ProjectsSection = () => {
  const [data, setData] = React.useState<Firestore.DocumentData[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { dataSnapShot } = Hooks.useFirestore();

  React.useEffect(() => {
    setIsLoading(true);
    dataSnapShot("projects", (snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
      setIsLoading(false);
    });
  }, []);
  return (
    <Mui.Box
      sx={{
        height: "100%",
        width: "100%",
        p: 3,
      }}
    >
      <Mui.Grid container spacing={3}>
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
      </Mui.Grid>
    </Mui.Box>
  );
};
