import * as Mui from "@mui/material";

export const ProjectCard = (props: CardType.Props) => {
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
          component={Mui.Link}
          href={props.actionUrl}
          target="_blank"
          size="small"
          variant="outlined"
        >
          Details
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
