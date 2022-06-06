import React from "react";
import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";

export const AdminProjectsCard = (props: CardType.Props) => {
  const { deleteData } = Hooks.useFirestore();
  const { confirmSwal } = Hooks.useSwal();

  const handleDelete = async () => {
    const result = await confirmSwal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
    });
    if (result) {
      const projectData =
        await Pages.Admin.ManageProjects.Hooks.useGetSingleProjectByTitle(
          props.title
        );
      deleteData(`projects/${projectData.docID}`);
    }
  };

  return (
    <Mui.Card>
      <Mui.CardMedia
        height={100}
        component="img"
        image={props.image || NoImage}
        alt={props.title}
        sx={{ objectFit: props.image ? "cover" : "contain" }}
      />
      <Mui.CardContent>
        <Mui.Typography gutterBottom variant="h5">
          {props.title}
        </Mui.Typography>
        <Mui.Typography variant="body2" color="text.secondary">
          {props.description}
        </Mui.Typography>
      </Mui.CardContent>
      <Mui.CardActions>
        <Mui.Button
          size="small"
          variant="outlined"
          onClick={() => props.handleShowEditDialogue(props.title)}
        >
          Edit
        </Mui.Button>
        <Mui.Button
          size="small"
          variant="contained"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
  );
};

export declare namespace CardType {
  export interface Props {
    image: string;
    title: string;
    description: string;
    actionUrl: string;
    handleShowEditDialogue: (T: string) => void;
  }
}
