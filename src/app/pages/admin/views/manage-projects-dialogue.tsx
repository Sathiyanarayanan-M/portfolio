import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";

export const FullScreenDialog = (props: FullScreenDialogType.Props) => {
  const { uploadFile, getDownloadURL } = Hooks.useFirebaseStorage();
  const { addData } = Hooks.useFirestore();
  const [inputFile, setInputFile] = React.useState<File | undefined>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmitValues = async (
    values: FullScreenDialogType.FormValues
  ) => {
    if (inputFile) {
      try {
        const uploadedFile = await uploadFile(
          inputFile,
          `projects/${inputFile.name}`
        );
        const downloadUrl = await getDownloadURL(
          uploadedFile.metadata.fullPath
        );

        addData(`projects`, {
          image: downloadUrl,
          ...values,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      addData(`projects`, values);
    }
  };

  return (
    <Mui.Dialog
      fullScreen
      open={props.showDialogue}
      onClose={props.handleShowDialogue}
    >
      <Formik.Formik
        initialValues={{
          title: "",
          description: "",
          role: "",
          techsUsed: "",
        }}
        onSubmit={(values, actions) => {
          const formatData = {
            ...values,
            techsUsed: values.techsUsed.split(",").filter(Boolean),
          };
          handleSubmitValues(formatData);
        }}
      >
        {(props) => (
          <Formik.Form>
            <Mui.TextField
              label="Title"
              name="title"
              type="text"
              variant="outlined"
              fullWidth
              onChange={props.handleChange}
              value={props.values.title}
              required
            />
            <Mui.TextField
              label="Description"
              name="description"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              value={props.values.description}
              fullWidth
              required
            />
            <Mui.TextField
              label="Role"
              name="role"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              value={props.values.role}
              fullWidth
              required
            />
            <Mui.TextField
              label="Tech Used"
              name="techsUsed"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              value={props.values.techsUsed}
              fullWidth
              required
            />
            <Mui.Typography variant="h5">{inputFile?.name}</Mui.Typography>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                hidden
                onChange={(event) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(event.target.files?.[0] as Blob);
                  reader.onload = () => {
                    setInputFile(event.target.files?.[0]);
                  };
                }}
              />
              <Mui.Button variant="contained" component="span">
                Upload
              </Mui.Button>
            </label>
            <Mui.Button type="submit" variant="contained" color="primary">
              Submit
            </Mui.Button>
          </Formik.Form>
        )}
      </Formik.Formik>
    </Mui.Dialog>
  );
};

export namespace FullScreenDialogType {
  export interface Props {
    showDialogue: boolean;
    handleShowDialogue: () => void;
  }
  export interface FormValues {
    title: string;
    description: string;
    role: string;
    techsUsed: string[];
  }
}
