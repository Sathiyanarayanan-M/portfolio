import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Content = () => {
  // const [showDialogue, setShowDialogue] = React.useState(false);

  // const handleShowDialogue = () => {
  //   setShowDialogue(!showDialogue);
  // };
  return (
    <Mui.Container
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* <Pages.Admin.Views.FullScreenDialog
        showDialogue={showDialogue}
        handleShowDialogue={handleShowDialogue}
      /> */}
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Mui.Button component={Router.Link} to="manage-projects">
          Manage Projects
        </Mui.Button>
        <Mui.Button>Manage Files</Mui.Button>
      </Mui.Stack>
    </Mui.Container>
  );
};
