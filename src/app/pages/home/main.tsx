import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => {
  return (
    <Mui.Box position="relative">
      <Pages.Home.Views.Content />
    </Mui.Box>
  );
};
