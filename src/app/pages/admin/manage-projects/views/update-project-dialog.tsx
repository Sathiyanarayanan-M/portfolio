import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Contexts from "src/app/contexts";

export const UpdateProjectDialog = (props: UpdateProjectDialogType.Props) => {
  const { addData, getSingleDoc } = Hooks.useFirestore();
  const { setSnack } = React.useContext(Contexts.SnackbarContext);
  const [docData, setDocData] =
    React.useState<UpdateProjectDialogType.FormValues>({
      title: "",
      description: "",
      role: "",
      techsUsed: "",
      detailsUrl: "",
      image: "",
    });

  const handleSubmitValues = async (
    values: UpdateProjectDialogType.FormValues,
    actions: Formik.FormikHelpers<UpdateProjectDialogType.FormValues>
  ) => {
    actions.setSubmitting(true);
    try {
      addData(`projects/${values.title}`, values);
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
        const doc = (await getSingleDoc(
          `projects/${props.editProjectTitle}`
        )) as UpdateProjectDialogType.FormValues;
        if (doc) {
          setDocData(doc);
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
          m: 5,
          minWidth: "300px",
        }}
      >
        <Formik.Formik
          enableReinitialize
          initialValues={docData}
          onSubmit={handleSubmitValues}
        >
          <Pages.Admin.ManageProjects.Views.ProjectForm />
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
  export interface FormValues {
    title: string;
    description: string;
    role: string;
    techsUsed: string;
    detailsUrl: string;
    image: string;
  }
}
