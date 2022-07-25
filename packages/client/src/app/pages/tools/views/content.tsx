import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Content = () => {
  return (
    <Mui.Container
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        {Pages.Tools.ToolsList.map((item) => (
          <Pages.Tools.Views.ToolsCard {...item} />
        ))}
      </Mui.Stack>
    </Mui.Container>
  );
};
