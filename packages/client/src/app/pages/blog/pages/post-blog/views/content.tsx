import React from "react";
import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as ReactWysiwyg from "react-draft-wysiwyg";
import * as DraftJS from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/blog/pages/post-blog/views/styles.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const Content = () => {
  const [editorState, setEditorState] = React.useState(
    DraftJS.EditorState.createEmpty()
  );
  const OnEditorStateChange = (state: ReactWysiwyg.EditorState) =>
    setEditorState(state);

  console.log(
    draftToHtml(DraftJS.convertToRaw(editorState.getCurrentContent()))
  );
  return (
    <Mui.Box sx={{ p: 2 }}>
      <Mui.Paper>
        <ReactWysiwyg.Editor
          editorState={editorState}
          editorClassName={styles.editor__wrapper}
          onEditorStateChange={OnEditorStateChange}
        />
      </Mui.Paper>
    </Mui.Box>
  );
};
