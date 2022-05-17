import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Firestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import Thinking from "src/assets/img/thinking.svg";

export const Content = () => {
  const [data, setData] = React.useState<Firestore.DocumentData[]>([]);
  const [showDialogue, setShowDialogue] = React.useState(false);

  const { getData } = Hooks.useFirestore();

  React.useEffect(() => {
    getData("projects").then((data) => setData(data));
  }, []);

  const handleShowDialogue = () => {
    setShowDialogue(!showDialogue);
  };
  return (
    <Mui.Box
      sx={{
        height: "100%",
        width: "100%",
        // m: 2,
        p: 2,
      }}
    >
      <Pages.Admin.ManageProjects.Views.AddNewProjectDialog
        showDialogue={showDialogue}
        handleShowDialogue={handleShowDialogue}
      />
      <Mui.Grid container spacing={3}>
        {data.map((item, index) => (
          <Mui.Grid xs={12} md={3} item key={index}>
            <Pages.Admin.ManageProjects.Views.AdminProjectsCard
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl=""
            />
          </Mui.Grid>
        ))}
        <Mui.Grid xs={12} md={3} item>
          <Mui.Stack
            alignItems="center"
            justifyContent="center"
            component={Mui.Button}
            variant="outlined"
            fullWidth
            sx={{ height: "100%" }}
            onClick={handleShowDialogue}
          >
            <MuiIcons.Add />
            <Mui.Typography variant="h5">Add New</Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Box>
  );
};
