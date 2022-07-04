import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";

export const ProjectCardNew = (props: CardTypeNew.Props) => {
  return (
    <Mui.Stack
      component={Mui.Card}
      sx={{
        borderRadius: 12,
      }}
    >
      <Mui.Stack>
        <Mui.Typography>Web</Mui.Typography>
        <Pages.Home.Views.ProjectMenu />
      </Mui.Stack>
      <Mui.CardMedia />
      <Mui.Typography variant="h6">
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
    </Mui.Stack>
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
