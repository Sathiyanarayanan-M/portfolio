import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
export const ArticlesCard = (
  props: Pages.Articles.Hooks.IUseProjectList.Article
) => {
  const handleNavigateToArticle = () => {
    window.open(props.url, "_blank");
  };
  return (
    <Mui.Card component={Mui.Stack} direction="row" raised sx={{ height: 200 }}>
      <Mui.CardContent
        component={Mui.CardActionArea}
        onClick={handleNavigateToArticle}
      >
        <Mui.Typography
          variant="h6"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {props.title}
        </Mui.Typography>
        <Mui.Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {props.description}
        </Mui.Typography>
      </Mui.CardContent>
      <Mui.CardMedia
        component="img"
        sx={{ minWidth: 151 }}
        image={props.urlToImage}
        alt="Live from space album cover"
      />
    </Mui.Card>
  );
};
