import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiLab from "@mui/lab";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

const sampleData = {
  tags: ["python", "programming", "web"],
};

export const SideBarWrapper = () => {
  const { data: blogOptions } = Pages.Blog.Hooks.useGetBlogOptions();
  const navigate = Router.useNavigate();

  return (
    <Mui.Stack spacing={3} sx={{ width: "25vw" }}>
      <Mui.Button
        variant="contained"
        sx={{ textTransform: "none", color: "common.white" }}
        onClick={() => navigate("post-blog")}
      >
        Create a Post?
      </Mui.Button>
      <Mui.Stack spacing={1}>
        <Mui.Typography variant="h5">Search</Mui.Typography>
        <Mui.TextField
          focused
          size="small"
          InputProps={{
            sx: {
              borderRadius: "20px",
            },
          }}
          // sx={{ borderRadius: "50%" }}
        />
      </Mui.Stack>
      <Mui.Box></Mui.Box>
      <Mui.Stack spacing={2}>
        <Mui.Typography variant="h5" mb={1}>
          Popular Tags
        </Mui.Typography>
        {blogOptions?.tags?.list?.map((item, idx) => (
          <Mui.Button
            variant="outlined"
            sx={{
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
              },
              width: "fit-content",
              maxWidth: 240,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "inline-block",
            }}
            key={idx}
          >
            #{item}
          </Mui.Button>
        ))}
      </Mui.Stack>
    </Mui.Stack>
  );
};
