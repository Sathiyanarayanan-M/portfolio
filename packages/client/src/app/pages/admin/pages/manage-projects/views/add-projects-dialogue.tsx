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
    values: Pages.Admin.Pages.ManageProjects.MainTypes.FormValues,
    actions: Formik.FormikHelpers<Pages.Admin.Pages.ManageProjects.MainTypes.FormValues>
  ) => {
    actions.setSubmitting(true);

    const isDocAvailable = (
      await Pages.Admin.Pages.ManageProjects.Hooks.useGetSingleProjectByTitle(
        values.title
      )
    ).data;
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
      const snapshot = addData(`projects`, values);
      setSnack({
        open: true,
        message: "Project Added",
        severity: "success",
      });
      props.handleShowDialogue();
    } catch (e: any) {
      console.log(e);
      setSnack({
        open: true,
        message: e.message,
        severity: "error",
      });
    }
    actions.setSubmitting(false);
  };

  return (
    <Mui.Dialog open={props.showDialogue} onClose={props.handleShowDialogue}>
      <Mui.Box
        sx={{
          m: 4,
          minWidth: "30vw",
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
          validationSchema={
            Pages.Admin.Pages.ManageProjects.Views.ProjectFormSchema
          }
        >
          <Pages.Admin.Pages.ManageProjects.Views.ProjectForm />
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
}
