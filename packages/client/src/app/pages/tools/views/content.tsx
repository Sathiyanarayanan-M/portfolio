import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Content = () => {
  return (
    <Mui.Box sx={{ p: 2 }}>
      <Mui.Grid container>
        {Pages.Tools.ToolsList.map((item) => (
          <Mui.Grid item xs={12} sm={6} md={4}>
            <Pages.Tools.Views.ToolsCard {...item} />
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Box>
  );
};
