import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";

export const ProjectCardNew = (props: CardTypeNew.Props) => {
  return (
    <Mui.Card
      sx={{
        borderRadius: 3,
        p: 2,
        // height: 400,
        // width: 300,
      }}
      elevation={0}
      raised
    >
      <Mui.Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
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
        }}
      />
      <Mui.Typography variant="h6" textAlign="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        impedit.
      </Mui.Typography>
      <Mui.Stack direction="row" justifyContent="flex-end">
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
