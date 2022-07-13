import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";

export const ProjectPaper = (props: CardTypeNew.Props) => {
  return (
    <Mui.Paper
      component={Mui.Stack}
      // alignItems="center"
      justifyContent="flex-end"
      sx={{
        background: `linear-gradient(0deg,rgba(0,0,0,.9),rgba(0,0,0,.2)), url(${props.image}) no-repeat`,
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "common.white",
        p: 2,
      }}
    >
      <Mui.Typography
        variant="h6"
        sx={{
          fontFamily: "'Din Condensed',sans-serif",
          textDecoration: "underline",
        }}
      >
        Web
      </Mui.Typography>
      <Mui.Typography
        variant="h5"
        sx={{
          fontFamily: "'Din Condensed',sans-serif",
          pb: 2,
        }}
      >
        {props.title}
      </Mui.Typography>
      <MuiIcons.DoubleArrow />
    </Mui.Paper>
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
