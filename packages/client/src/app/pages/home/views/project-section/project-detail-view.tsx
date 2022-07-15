import * as Mui from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";
import NoImage from "src/assets/img/no-image.svg";
import styles from "src/app/pages/home/views/styles.module.scss";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Mui.Grow ref={ref} {...props} />;
});

export const ProjectDetailView = (props: ProjectDetailViewType.Props) => {
  console.log(props);
  return (
    <Mui.Dialog
      open
      onClose={() => props.handleSelectedProject(0)}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          borderRadius: "20px",
        },
      }}
    >
      <Mui.Paper className={styles.project__detailview}>
        <Mui.Box className={styles.img__title__container}>
          <Components.MuiComponents.CustomCardMedia
            image={props.projectData?.image}
            className={styles.bg__image}
          />
          <Mui.Typography variant="h4" className={styles.title}>
            {props.projectData?.title}
          </Mui.Typography>
        </Mui.Box>
        <Mui.Stack spacing={2} p={2}>
          <Mui.Typography>{props.projectData?.description}</Mui.Typography>
          <Mui.Button
            component={Mui.Link}
            variant="outlined"
            href={props.projectData?.detailsUrl}
            target="_blank"
          >
            View in detail
          </Mui.Button>
        </Mui.Stack>
      </Mui.Paper>
    </Mui.Dialog>
  );
};

export declare namespace ProjectDetailViewType {
  export interface Props {
    projectData?: Pages.Home.Hooks.IUseProjectList.Data;
    handleSelectedProject: (value: string | number) => void;
  }
  export interface ProjectData {
    image: string;
    title: string;
    description: string;
    actionUrl: string;
  }
}
