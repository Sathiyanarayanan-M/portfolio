import * as Mui from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import * as MuiIcons from "@mui/icons-material";
import * as FramerMotion from "framer-motion";
import * as Pages from "src/app/pages";
import NoImage from "src/assets/img/no-image.svg";
import styles from "src/app/pages/home/views/styles.module.scss";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Mui.Slide direction="right" ref={ref} {...props} />;
});

export const ProjectDetailView = (props: ProjectDetailViewType.Props) => {
  return (
    <Mui.Dialog
      open
      onClose={() => props.handleSelectedProject(0)}
      TransitionComponent={Transition}
    >
      <Mui.Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio
        natus porro, veritatis aspernatur a consequuntur sunt quasi quos sed
        illo, asperiores et, nobis excepturi perferendis harum debitis voluptas
        ut dolores id reprehenderit voluptate. Suscipit perspiciatis quo
        voluptate. Maxime facilis rerum unde dolorum, optio saepe voluptate nemo
        illo veniam, labore eos corporis quasi qui delectus fugit debitis,
        magnam molestiae nihil doloribus reiciendis corrupti itaque soluta
        distinctio. Voluptatem rerum veritatis ipsum dolores, eveniet facilis et
        exercitationem aut eligendi possimus repellendus quaerat.
      </Mui.Box>
    </Mui.Dialog>
  );
};

export declare namespace ProjectDetailViewType {
  export interface Props {
    // image: string;
    // title: string;
    // description: string;
    // actionUrl: string;
    handleSelectedProject: (value: string | number) => void;
  }
}
