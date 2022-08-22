import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const BlogCard = (props: Pages.Blog.Hooks.IUseBlogList.Data) => {
  const formatDate = (timestamp: string | number) => {
    const date = new Date(timestamp);
    return `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getDate()}`;
  };

  return (
    <Mui.Card sx={{ p: 1, width: "100%", color: "common.black" }}>
      <Mui.CardContent component={Mui.Stack} spacing={1}>
        {/* <Mui.Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Word of the Day
        </Mui.Typography> */}
        <Mui.Stack direction="row" alignItems="center">
          <Mui.Avatar
            alt={props.user.name}
            src={
              props.user.profile ||
              `https://avatars.dicebear.com/api/identicon/:${props.user.name}.svg`
            }
          />
          <Mui.Stack sx={{ ml: 2 }}>
            <Mui.Typography
              variant="subtitle1"
              fontWeight={600}
              color="common.black"
            >
              {props.user.name}
            </Mui.Typography>
            <Mui.Typography variant="subtitle2" color="common.black">
              {formatDate(props.timestamp)}
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Stack>
        <Mui.Typography
          variant="h5"
          fontWeight={600}
          color="common.black"
          textTransform="capitalize"
        >
          {props.title}
        </Mui.Typography>
        <Mui.Typography
          color="common.black"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.description}
        </Mui.Typography>
        <Mui.Stack direction="row" spacing={1}>
          {props.tags.map((item, idx) => (
            <Mui.Button
              key={idx}
              sx={{ color: "common.black", textTransform: "none" }}
            >{`#${item}`}</Mui.Button>
          ))}
        </Mui.Stack>
      </Mui.CardContent>
      <Mui.CardActions sx={{ justifyContent: "space-between" }}>
        <Mui.Stack direction="row" alignItems="center" spacing={1}>
          <Mui.IconButton
            size="small"
            color={props.isLiked ? "error" : "default"}
          >
            {props.isLiked ? (
              <MuiIcons.Favorite />
            ) : (
              <MuiIcons.FavoriteBorder />
            )}
          </Mui.IconButton>
          <Mui.Typography color="common.black">
            {props.likes} Likes
          </Mui.Typography>
        </Mui.Stack>

        <Mui.Stack direction="row" alignItems="center" spacing={2}>
          <Mui.Typography color="common.black">
            {props.timeToRead}
          </Mui.Typography>
          <Mui.IconButton size="small">
            {props.isBookmarked ? (
              <MuiIcons.BookmarkAdd />
            ) : (
              <MuiIcons.BookmarkAdded />
            )}
          </Mui.IconButton>
        </Mui.Stack>
      </Mui.CardActions>
    </Mui.Card>
  );
};
