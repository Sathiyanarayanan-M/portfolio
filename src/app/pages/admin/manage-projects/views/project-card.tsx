import * as Mui from "@mui/material";
import NoImage from "src/assets/img/no-image.svg";

export const AdminProjectsCard = (props: CardType.Props) => {
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
        <Mui.Typography gutterBottom variant="h5" component="div">
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
          href={props.actionUrl}
          target="_blank"
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
