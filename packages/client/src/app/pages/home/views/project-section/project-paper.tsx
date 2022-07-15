import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";
import styles from "src/app/pages/home/views/styles.module.scss";

export const ProjectPaper = (props: ProjectPaperType.Props) => {
  return (
    <Mui.Paper
      component={Mui.Stack}
      // alignItems="center"
      className={styles.project__paper}
      onClick={() => props.handleSelectProject(props.title)}
      justifyContent="flex-end"
      sx={{
        background: `linear-gradient(0deg,rgba(0,0,0,.9),rgba(0,0,0,.2)), url(${props.image}) no-repeat`,
        height: "400px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "common.white",
        padding: "20px",
        "&:hover": {
          background: `url(${props.image}) no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
    >
      <Mui.Typography
        variant="h6"
        sx={{
          fontFamily: "'Din Condensed',sans-serif",
        }}
        className={styles.head__title}
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
      <MuiIcons.DoubleArrow className={styles.arrow__icon} />
    </Mui.Paper>
  );
};

export declare namespace ProjectPaperType {
  export interface Props {
    image: string;
    title: string;
    description: string;
    actionUrl: string;
    handleSelectProject: (value: string) => void;
  }
}
