import * as Mui from "@mui/material";

export const AdminProjectsCard = (props: CardType.Props) => {
  return (
    <Mui.Card>
      <Mui.CardMedia
        height={100}
        component="img"
        image={props.image}
        alt={props.title}
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
          href={props.actionUrl}
          target="_blank"
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
  }
}
