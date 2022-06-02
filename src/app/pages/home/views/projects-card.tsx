import * as Mui from "@mui/material";
import NoImage from "src/assets/img/no-image.svg";

export const ProjectCard = (props: CardType.Props) => {
  return (
    <Mui.Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      // flexWrap="wrap"
      sx={{
        width: "100%",
        height: "100%",
        px: { xs: 0, md: 15 },
      }}
      spacing={4}
    >
      <Mui.CardMedia
        component="img"
        image={props.image || NoImage}
        alt={props.title}
        sx={{
          objectFit: "contain",
          width: "fit-content",
          maxHeight: { xs: "70%", md: "50vh" },
          maxWidth: { xs: "70%", md: "40vw" },
        }}
      />
      <Mui.Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          height: "100%",
          px: { xs: 10, md: 0 },
        }}
        spacing={2}
      >
        <Mui.Box sx={{ maxWidth: "70%" }}>
          <Mui.Typography gutterBottom variant="h5" maxWidth={300}>
            {props.title}
          </Mui.Typography>
          <Mui.Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              textOverflow: "ellipsis",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
            }}
          >
            {props.description}
          </Mui.Typography>
        </Mui.Box>
        <Mui.Button
          component={Mui.Link}
          href={props.actionUrl}
          target="_blank"
          size="small"
          variant="outlined"
          rel="noopener noreferrer"
        >
          Details
        </Mui.Button>
      </Mui.Stack>
    </Mui.Stack>
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
