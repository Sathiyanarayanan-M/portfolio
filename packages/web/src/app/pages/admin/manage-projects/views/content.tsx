import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Firestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import Thinking from "src/assets/img/thinking.svg";

export const Content = () => {
  const [data, setData] = React.useState<Firestore.DocumentData[]>([]);
  const [showAddProjectDialog, setShowAddProjectDialog] = React.useState(false);
  const [showEditProjectDialog, setShowEditProjectDialog] =
    React.useState(false);
  const [editProjectTitle, setEditProjectTitle] = React.useState("");

  const { dataSnapShot } = Hooks.useFirestore();

  React.useEffect(() => {
    dataSnapShot("projects", (snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleAddProjectDialog = () =>
    setShowAddProjectDialog(!showAddProjectDialog);

  const handleShowEditDialog = (editProjectTitle: string) => {
    setEditProjectTitle(editProjectTitle);
    setShowEditProjectDialog(!showEditProjectDialog);
  };

  const handleCloseEditProjectDialog = () =>
    setShowEditProjectDialog(!showEditProjectDialog);

  return (
    <Mui.Box
      sx={{
        height: "100%",
        width: "100%",
        p: 2,
      }}
    >
      {showAddProjectDialog ? (
        <Pages.Admin.ManageProjects.Views.AddNewProjectDialog
          showDialogue={showAddProjectDialog}
          handleShowDialogue={handleAddProjectDialog}
        />
      ) : null}

      {showEditProjectDialog ? (
        <Pages.Admin.ManageProjects.Views.UpdateProjectDialog
          showDialogue={showEditProjectDialog}
          handleCloseEditDialog={handleCloseEditProjectDialog}
          editProjectTitle={editProjectTitle}
        />
      ) : null}
      <Mui.Grid container spacing={3}>
        {data.map((item, index) => (
          <Mui.Grid xs={12} md={3} item key={index}>
            <Pages.Admin.ManageProjects.Views.AdminProjectsCard
              title={item.title}
              image={item.image}
              description={item.description}
              actionUrl=""
              handleShowEditDialogue={handleShowEditDialog}
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
            onClick={handleAddProjectDialog}
          >
            <MuiIcons.Add />
            <Mui.Typography variant="h5">Add New</Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Box>
  );
};
