import React from "react";
import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const ToolsCard = (props: Pages.Tools.ToolsListType) => {
  return (
    <Components.Morphisms.GlassMorphism sx={{ p: 3 }} component={Mui.Stack}>
      <Mui.Typography>{props.title}</Mui.Typography>
    </Components.Morphisms.GlassMorphism>
  );
};
