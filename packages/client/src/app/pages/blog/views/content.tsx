import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Content = () => {
  const [pageNum, setPageNum] = React.useState(1);
  const [articlesList, setArticlesList] = React.useState<
    Pages.Blog.Hooks.IUseArticleList.Article[]
  >([]);

  const { data, isLoading } = Pages.Blog.Hooks.useGetArticles({
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

  return (
    <Mui.Stack
      direction="row"
      sx={{ py: 4, px: { xs: 2, md: 12 }, color: "common.white" }}
      spacing={4}
      justifyContent="space-between"
    >
      <Pages.Blog.Views.FloatingActionButton />
      <Pages.Blog.Views.SideBarWrapper />
      <Pages.Blog.Views.BlogContainer />
      {/* <Pages.Blog.Views.RightSideBar /> */}
      {/* <Mui.Button
        variant="outlined"
        sx={{ maxWidth: "fit-content", alignSelf: "flex-end" }}
      >
        Create a Post?
      </Mui.Button> */}
      {/* <Mui.Grid container spacing={2}>
        {articlesList?.map((item, index) => (
          <Mui.Grid item xs={12} sm={6} md={4} key={index}>
            <Pages.Blog.Views.ArticlesCard {...item} />
          </Mui.Grid>
        ))}
        {!articlesList.length &&
          isLoading &&
          [...Array(10).keys()].map((item) => (
            <Mui.Grid item xs={12} sm={6} md={4} key={item}>
              <Components.CardSkeleton />
            </Mui.Grid>
          ))}
      </Mui.Grid> */}
      {/* <Components.MuiComponents.CustomLoadingButton
        fullWidth
        text="Load More"
        loading={isLoading}
        onClick={handleLoadMore}
        variant="outlined"
        sx={{ display: articlesList.length ? "inline-flex" : "none" }}
      /> */}
    </Mui.Stack>
  );
};
