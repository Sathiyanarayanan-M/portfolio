import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
export const ArticlesCard = (
  props: Pages.Blog.Hooks.IUseProjectList.Article
) => {
  const handleNavigateToArticle = () => {
    window.open(props.url, "_blank");
  };
  const timeDifference = Hooks.getRelativeTimeDifference(
    new Date().getTime(),
    new Date(props.publishedAt).getTime()
  );
  return (
    <Mui.Card
      component={Mui.Stack}
      direction="row"
      raised
      sx={{
        height: 230,
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 0.5px )",
        WebkitBackdropFilter: "blur( 0.5px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <Mui.CardContent
        component={Mui.CardActionArea}
        onClick={handleNavigateToArticle}
      >
        <Mui.Typography variant="caption">{props.source.name}</Mui.Typography>
        <Mui.Typography
          variant="h6"
          color="primary.main"
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
          divider={
            <Mui.Typography style={{ margin: "auto 5px" }}>-</Mui.Typography>
          }
          flexWrap="nowrap"
        >
          <Mui.Typography
            variant="body2"
            // color="text.secondary"
            fontWeight="bold"
            noWrap
          >
            {props.author}
          </Mui.Typography>
          <Mui.Typography variant="caption" noWrap>
            {timeDifference}
          </Mui.Typography>
        </Mui.Stack>

        <Mui.Typography
          variant="body2"
          // color="text.secondary"
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
        sx={{ minWidth: 151, userSelect: "none" }}
        image={props.urlToImage}
        alt={props.title}
        onClick={handleNavigateToArticle}
      />
    </Mui.Card>
  );
};
