import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import styles from "src/app/pages/home/views/styles.module.scss";

export const ProjectPaper = (props: ProjectPaperType.Props) => {
  return (
    <Mui.Paper
      component={Mui.Stack}
      className={styles.project__paper}
      onClick={() => props.handleSelectProject(props.title)}
      justifyContent="flex-end"
      sx={{
        height: "400px",
        color: "common.white",
      }}
    >
      <img src={props.image} className={styles.card__image} />
      <Mui.Stack justifyContent="flex-end" className={styles.text__box}>
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
      </Mui.Stack>
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
