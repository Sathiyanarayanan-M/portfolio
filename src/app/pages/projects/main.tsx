import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Main = () => {
  return (
    <Mui.Box sx={{ height: `calc(100% - ${Hooks.useAppBarHeight()}px)` }}>
      <Pages.Projects.Views.Content />
    </Mui.Box>
  );
};
