import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const AddNewProjectDialog = (props: ManageProjectDialogue.Props) => {
  const { uploadFile, getDownloadURL } = Hooks.useFirebaseStorage();
  const { addData } = Hooks.useFirestore();

  const handleSubmitValues = async (
    values: ManageProjectDialogue.FormValues,
    actions: Formik.FormikHelpers<ManageProjectDialogue.FormValues>
  ) => {
    const formatedData = {
      ...values,
      techsUsed: values.techsUsed.split(",").filter(Boolean),
    };
    actions.setSubmitting(true);
    if (formatedData.image) {
      try {
        const uploadedFile = await uploadFile(
          formatedData.image,
          `projects/${Hooks.useGenerateUniqueId(formatedData.title || "")}`
        );
        const downloadUrl = await getDownloadURL(
          uploadedFile.metadata.fullPath
        );

        addData("projects", {
          ...formatedData,
          image: downloadUrl,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      addData(`projects`, formatedData);
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
