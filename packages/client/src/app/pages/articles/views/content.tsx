import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Content = () => {
  const { data } = Pages.Articles.Hooks.useGetArticles();
  return (
    <Mui.Grid container sx={{ p: 4 }} spacing={2}>
      {data?.articles.map((item, index) => (
        <Mui.Grid item xs={12} sm={6} md={4} key={index}>
          <Pages.Articles.Views.ArticlesCard {...item} />
        </Mui.Grid>
      ))}
    </Mui.Grid>
  );
};
