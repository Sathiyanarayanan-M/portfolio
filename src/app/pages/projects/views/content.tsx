import React from "react";
import * as Mui from "@mui/material";
import * as Firestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import Thinking from "src/assets/img/thinking.svg";

export const Content = () => {
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
          ? [...Array(10).keys()].map((index) => (
              <Mui.Grid item xs={12} md={3} key={index}>
                <Mui.Skeleton variant="rectangular" height={150} />
                <Mui.Skeleton />
                <Mui.Skeleton width="60%" />
              </Mui.Grid>
            ))
          : data.map((item, index) => (
              <Mui.Grid xs={12} md={3} item key={index}>
                <Pages.Projects.Views.ProjectCard
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
