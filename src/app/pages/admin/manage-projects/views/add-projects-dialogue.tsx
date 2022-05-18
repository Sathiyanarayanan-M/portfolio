import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";

export const AddNewProjectDialog = (props: ManageProjectDialogue.Props) => {
  const { uploadFile, getDownloadURL } = Hooks.useFirebaseStorage();
  const { addData, getSingleDoc } = Hooks.useFirestore();
  const { setSnack } = React.useContext(Contexts.SnackbarContext);

  const handleSubmitValues = async (
    values: ManageProjectDialogue.FormValues,
    actions: Formik.FormikHelpers<ManageProjectDialogue.FormValues>
  ) => {
    actions.setSubmitting(true);

    const isDocAvailable = await getSingleDoc(`projects/${values.title}`);
    if (isDocAvailable) {
      actions.setSubmitting(false);
      setSnack({
        open: true,
        message: "Project already exists!",
        severity: "error",
      });
      return;
    }
    try {
      if (values.image) {
        const uploadedFile = await uploadFile(
          values.image,
          `projects/${Hooks.useGenerateUniqueId(values.title || "")}`
        );
        const downloadUrl = await getDownloadURL(
          uploadedFile.metadata.fullPath
        );

        addData(`projects/${values.title}`, {
          ...values,
          image: downloadUrl,
        });
        setSnack({
          open: true,
          message: "Project Added",
          severity: "success",
        });
      } else {
        addData(`projects/${values.title}`, values);
        setSnack({
          open: true,
          message: "Project Added",
          severity: "success",
        });
      }
    } catch (e: any) {
      console.log(e);
      setSnack({
        open: true,
        message: e.message,
        severity: "error",
      });
    }
    actions.setSubmitting(false);
    props.handleShowDialogue();
  };

  return (
    <Mui.Dialog open={props.showDialogue} onClose={props.handleShowDialogue}>
      <Mui.Box
        sx={{
          m: 5,
          minWidth: "300px",
        }}
      >
        <Formik.Formik
          initialValues={{
            title: "",
            description: "",
            role: "",
            techsUsed: "",
            detailsUrl: "",
            image: "",
          }}
          onSubmit={handleSubmitValues}
        >
          <Pages.Admin.ManageProjects.Views.ProjectForm />
        </Formik.Formik>
      </Mui.Box>
    </Mui.Dialog>
  );
};

export namespace ManageProjectDialogue {
  export interface Props {
    showDialogue: boolean;
    handleShowDialogue: () => void;
  }
  export interface FormValues {
    title: string;
    description: string;
    role: string;
    techsUsed: string;
    detailsUrl: string;
    image: string;
  }
}
