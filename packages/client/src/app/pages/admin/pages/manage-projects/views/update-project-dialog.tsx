import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";

export const UpdateProjectDialog = (props: UpdateProjectDialogType.Props) => {
  const { updateData } = Hooks.useFirestore();
  const { setSnack } = React.useContext(Contexts.SnackbarContext);
  const [docData, setDocData] =
    React.useState<Pages.Admin.Pages.ManageProjects.MainTypes.FormValues>({
      title: "",
      description: "",
      role: "",
      techsUsed: "",
      detailsUrl: "",
      image: "",
    });
  const [docID, setDocId] = React.useState<string>("");

  const handleSubmitValues = async (
    values: Pages.Admin.Pages.ManageProjects.MainTypes.FormValues,
    actions: Formik.FormikHelpers<Pages.Admin.Pages.ManageProjects.MainTypes.FormValues>
  ) => {
    actions.setSubmitting(true);
    try {
      updateData(`projects/${docID}`, values);
      setSnack({
        open: true,
        message: "Project Updated",
        severity: "success",
      });
    } catch (e: any) {
      console.log(e);
      setSnack({
        open: true,
        message: e.message,
        severity: "error",
      });
    }
    actions.setSubmitting(false);
    props.handleCloseEditDialog();
  };

  React.useEffect(() => {
    if (props.editProjectTitle) {
      (async function () {
        const projectData =
          await Pages.Admin.Pages.ManageProjects.Hooks.useGetSingleProjectByTitle(
            props.editProjectTitle
          );
        const docData = projectData.data;
        setDocId(projectData.docID);
        if (docData) {
          setDocData(docData);
        } else {
          setSnack({
            open: true,
            message: "Project Not Found",
            severity: "error",
          });
          props.handleCloseEditDialog();
        }
      })();
    }
  }, [props.editProjectTitle]);

  return (
    <Mui.Dialog open={props.showDialogue} onClose={props.handleCloseEditDialog}>
      <Mui.Box
        sx={{
          m: 4,
          minWidth: "30vw",
        }}
      >
        <Formik.Formik
          enableReinitialize
          initialValues={docData}
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

export namespace UpdateProjectDialogType {
  export interface Props {
    showDialogue: boolean;
    handleCloseEditDialog: () => void;
    editProjectTitle: string;
  }
}
