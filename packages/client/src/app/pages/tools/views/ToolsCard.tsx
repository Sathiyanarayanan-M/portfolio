import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const ToolsCard = (props: Pages.Tools.ToolsListType) => {
  return (
    <Components.Morphisms.GlassMorphism sx={{ p: 3 }} component={Mui.Stack}>
      <Mui.Stack spacing={2}>
        <Mui.Typography variant="h6">{props.title}</Mui.Typography>
        <Mui.Typography variant="subtitle2">{props.description}</Mui.Typography>
        <Mui.Link
          component={Router.Link}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            textDecoration: "none",
            transition: "background 1s",
            p: 1,
            borderRadius: 2,
            ":hover": {
              bgcolor: "primary.500",
            },
          }}
          to={props.path}
        >
          View <MuiIcons.ArrowForward fontSize="small" sx={{ ml: 1 }} />
        </Mui.Link>
      </Mui.Stack>
    </Components.Morphisms.GlassMorphism>
  );
};
