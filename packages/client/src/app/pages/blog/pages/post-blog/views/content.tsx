import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import Loadsh from "lodash";
import * as ReactWysiwyg from "react-draft-wysiwyg";
import * as DraftJS from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/blog/pages/post-blog/views/styles.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const Content = () => {
  const [editorState, setEditorState] = React.useState(
    DraftJS.EditorState.createEmpty()
  );
  const { setSnack } = React.useContext(Contexts.SnackbarContext);
  const [title, setTitle] = React.useState("");
  const navigate = Router.useNavigate();
  const { getFromLocalStorage, setToLocalStorage, removeFromStorage } =
    Hooks.useLocalStorage();

  const { data: blogOptions } = Pages.Blog.Hooks.useGetBlogOptions();
  console.log(blogOptions);

  const { mutate, isLoading } = Pages.Blog.Pages.PostBlog.Hooks.usePostBlog({
    callbacks: {
      onSuccess: (data) => {
        removeFromStorage("local-blog");
        setSnack({
          open: true,
          message: "Your response send successfully",
          severity: "success",
        });
        navigate("/blog");
        console.log(data);
      },
    },
  });

  const storeBlogInLocalStorage = (state: ReactWysiwyg.EditorState) => {
    const rawContent = DraftJS.convertToRaw(state.getCurrentContent());
    console.log(rawContent);
    setToLocalStorage("local-blog", rawContent, { stringify: true });
  };

  const storageHandler = Loadsh.debounce(storeBlogInLocalStorage, 500);

  const OnEditorStateChange = (state: ReactWysiwyg.EditorState) => {
    storageHandler(state);
    setEditorState(state);
  };

  const handleSubmitBlog = (event: React.FormEvent) => {
    event.preventDefault();
    const htmlContent = draftToHtml(
      DraftJS.convertToRaw(editorState.getCurrentContent())
    );
    mutate({
      title,
      content: htmlContent,
    });
  };

  React.useEffect(() => {
    const blogFromLocalStorage = getFromLocalStorage("local-blog", {
      parse: true,
    });
    if (blogFromLocalStorage) {
      const stateContent = DraftJS.convertFromRaw(blogFromLocalStorage);
      const createWithContent =
        DraftJS.EditorState.createWithContent(stateContent);
      setEditorState(createWithContent);
    }
  }, []);

  return (
    <Mui.Stack
      component="form"
      onSubmit={handleSubmitBlog}
      spacing={2}
      sx={{ p: 2 }}
    >
      <Mui.Box>
        <Mui.Stack alignItems="center" direction="row" spacing={1}>
          <Mui.Typography variant="h6">Title:</Mui.Typography>
          <Mui.Tooltip title="Add a title for this blog" placement="top" arrow>
            <MuiIcons.Info sx={{ color: "common.white" }} fontSize="small" />
          </Mui.Tooltip>
        </Mui.Stack>
        <Mui.TextField
          focused
          variant="outlined"
          fullWidth
          required
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </Mui.Box>

      <Mui.Paper>
        <ReactWysiwyg.Editor
          editorState={editorState}
          editorClassName={styles.editor__wrapper}
          onEditorStateChange={OnEditorStateChange}
        />
      </Mui.Paper>

      <Mui.Stack direction="row" justifyContent="space-between">
        {/* <Mui.Autocomplete
          color="primary"
          multiple
          limitTags={3}
          options={blogOptions?.tags?.list || []}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Mui.Checkbox
                icon={<MuiIcons.CheckBoxOutlineBlank fontSize="small" />}
                checkedIcon={<MuiIcons.CheckBox fontSize="small" />}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => <Mui.TextField {...params} focused />}
          ChipProps={{
            sx: {
              color: "primary.main",
              background: "primary[100]",
            },
          }}
        /> */}
        <Mui.Button
          variant="contained"
          type="submit"
          sx={{ color: "common.white", width: 300, alignSelf: "flex-end" }}
        >
          Submit
        </Mui.Button>
      </Mui.Stack>
    </Mui.Stack>
  );
};
