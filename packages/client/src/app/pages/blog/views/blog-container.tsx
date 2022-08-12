import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const BlogContainer = () => {
  const { data: blogData, isLoading: isBlogLoading } =
    Pages.Blog.Hooks.useGetBlogs();

  const formattedBlogData = blogData?.map((item, idx) => ({
    ...item,
    tags: ["programming", "pytho", "web"],
    user: {
      profile: "",
      name: item.title,
    },
    timeToRead: idx + " min",
    isBookmarked: !!(idx % 2),
    isLiked: !!!(idx % 2),
    likes: idx * 2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolor expedita sapiente aperiam a reprehenderit, accusamus, ipsa, incidunt modi eaque labore saepe dolorem aliquam eveniet ipsum officia velit odio! Placeat!",
  }));

  return (
    <Mui.Box sx={{ width: "100%" }}>
      <Mui.Stack spacing={2}>
        {formattedBlogData?.map((item, index) => (
          <React.Fragment key={index}>
            <Pages.Blog.Views.BlogCard {...item} />
          </React.Fragment>
        ))}
      </Mui.Stack>
    </Mui.Box>
  );
};
