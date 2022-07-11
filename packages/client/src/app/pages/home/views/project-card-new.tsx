import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";

export const ProjectCardNew = (props: CardTypeNew.Props) => {
  return (
    <Mui.Card
      sx={{
        borderRadius: 3,
        // p: 2,
      }}
      elevation={0}
      raised
    >
      <Mui.Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 2,
        }}
      >
        <Mui.Typography>Web</Mui.Typography>
        <Pages.Home.Views.ProjectMenu />
      </Mui.Stack>
      <Mui.CardMedia
        component="img"
        image={props.image || NoImage}
        alt={props.title}
        sx={{
          objectFit: "contain",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      />
      <Mui.Typography variant="h6" textAlign="left" sx={{ px: 2, py: 1 }}>
        {props.title}
      </Mui.Typography>
      <Mui.Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ px: 2, py: 1 }}
      >
        <Mui.IconButton>
          <MuiIcons.InfoOutlined />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.Share />
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.Card>
  );
};

export declare namespace CardTypeNew {
  export interface Props {
    image: string;
    title: string;
    description: string;
    actionUrl: string;
  }
}
