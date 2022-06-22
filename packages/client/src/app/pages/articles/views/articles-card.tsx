import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
export const ArticlesCard = (
  props: Pages.Articles.Hooks.IUseProjectList.Article
) => {
  const handleNavigateToArticle = () => {
    window.open(props.url, "_blank");
  };
  const timeDifference = Hooks.getRelativeTimeDifference(
    new Date().getTime(),
    new Date(props.publishedAt).getTime()
  );
  return (
    <Mui.Card component={Mui.Stack} direction="row" raised sx={{ height: 230 }}>
      <Mui.CardContent
        component={Mui.CardActionArea}
        onClick={handleNavigateToArticle}
      >
        <Mui.Typography variant="caption">{props.source.name}</Mui.Typography>
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
        <Mui.Stack
          direction="row"
          divider={<span style={{ margin: "auto 5px" }}>-</span>}
          flexWrap="nowrap"
        >
          <Mui.Typography
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
            noWrap
          >
            {props.author}
          </Mui.Typography>
          <Mui.Typography variant="caption" color="GrayText" noWrap>
            {timeDifference}
          </Mui.Typography>
        </Mui.Stack>

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
        alt={props.title}
      />
    </Mui.Card>
  );
};
