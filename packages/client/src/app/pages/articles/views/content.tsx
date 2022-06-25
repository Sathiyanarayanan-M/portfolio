import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Content = () => {
  const [pageNum, setPageNum] = React.useState(1);
  const [articlesList, setArticlesList] = React.useState<
    Pages.Articles.Hooks.IUseProjectList.Article[]
  >([]);
  console.log(articlesList);

  const { data, isLoading } = Pages.Articles.Hooks.useGetArticles({
    page: pageNum,
    pageSize: 20,
  });

  const handleLoadMore = () => {
    setPageNum((prev) => prev + 1);
  };

  React.useEffect(() => {
    if (data?.articles) {
      setArticlesList((prev) => [...prev, ...data?.articles]);
    }
  }, [JSON.stringify(data)]);
  console.log(!articlesList.length, isLoading);

  return (
    <Mui.Stack sx={{ p: 4 }} spacing={2}>
      <Mui.Grid container spacing={2}>
        {articlesList?.map((item, index) => (
          <Mui.Grid item xs={12} sm={6} md={4} key={index}>
            <Pages.Articles.Views.ArticlesCard {...item} />
          </Mui.Grid>
        ))}
        {!articlesList.length &&
          isLoading &&
          [...Array(10).keys()].map((item) => (
            <Mui.Grid item xs={12} sm={6} md={4} key={item}>
              <Components.CardSkeleton />
            </Mui.Grid>
          ))}
      </Mui.Grid>

      <MuiLab.LoadingButton
        fullWidth
        loading={isLoading}
        onClick={handleLoadMore}
        variant="outlined"
        sx={{ display: articlesList.length ? "inline-flex" : "none" }}
      >
        Load More
      </MuiLab.LoadingButton>
    </Mui.Stack>
  );
};
