import React from "react";
import * as Mui from "@mui/material";
import * as Firestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import Thinking from "src/assets/img/thinking.svg";

export const Content = () => {
  const [data, setData] = React.useState<Firestore.DocumentData[]>([]);
  const { getData } = Hooks.useFirestore();

  React.useEffect(() => {
    getData("projects").then((data) => setData(data));
  }, []);
  return (
    <Mui.Container
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Mui.Grid container spacing={3}>
        {data.map((item, index) => (
          <Mui.Grid xs={12} md={6} item key={index}>
            <Pages.Projects.Views.ProjectCard
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl=""
            />
          </Mui.Grid>
        ))}
        {/* <Mui.Typography variant="h5">Projects Page</Mui.Typography> */}
      </Mui.Grid>
    </Mui.Container>
  );
};
