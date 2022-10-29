import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Content = () => {
  return (
    <Mui.Box sx={{ p: { md: 5, xs: 3 } }}>
      <Mui.Grid container>
        {Pages.Tools.ToolsList.map((item, idx) => (
          <Mui.Grid item xs={12} sm={6} md={4} key={idx}>
            <Pages.Tools.Views.ToolsCard {...item} />
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Box>
  );
};
