import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Content = () => {
  const { data } = Pages.Articles.Hooks.useGetArticles();
  console.log(data);
  return <Mui.Typography>{JSON.stringify(data)}</Mui.Typography>;
};
