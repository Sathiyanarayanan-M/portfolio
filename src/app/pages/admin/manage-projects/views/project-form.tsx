import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";

export const ProjectForm = () => {
  const formikContext = Formik.useFormikContext<ProjectFormType.FormValues>();

  return (
    <Formik.Form>
      <Mui.Stack spacing={3}>
        <Mui.TextField
          label="Title"
          name="title"
          type="text"
          variant="outlined"
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.title}
          required
        />
        <Mui.TextField
          label="Description"
          name="description"
          type="text"
          variant="outlined"
          onChange={formikContext.handleChange}
          value={formikContext.values.description}
          fullWidth
          required
        />
        <Mui.TextField
          label="Role"
          name="role"
          type="text"
          variant="outlined"
          onChange={formikContext.handleChange}
          value={formikContext.values.role}
          fullWidth
          required
        />
        <Mui.TextField
          label="Tech Used"
          name="techsUsed"
          type="text"
          variant="outlined"
          onChange={formikContext.handleChange}
          value={formikContext.values.techsUsed}
          fullWidth
          required
        />
        <Mui.TextField
          label="Details url"
          name="detailsUrl"
          type="text"
          variant="outlined"
          onChange={formikContext.handleChange}
          value={formikContext.values.detailsUrl}
          fullWidth
          required
        />
        <label htmlFor="contained-button-file" style={{ width: "fit-content" }}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            hidden
            onChange={async (event) => {
              const base64File = await Hooks.useConvertBase64(
                event?.target?.files?.[0] as Blob
              );
              formikContext.setFieldValue("image", base64File);
            }}
          />
          <Mui.Button variant="contained" component="span">
            Upload
          </Mui.Button>
        </label>
        <MuiLab.LoadingButton
          loading={formikContext.isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </MuiLab.LoadingButton>
      </Mui.Stack>
    </Formik.Form>
  );
};

export namespace ProjectFormType {
  export interface Props {}
  export interface FormValues {
    title: string;
    description: string;
    role: string;
    techsUsed: string[];
    detailsUrl: string;
    image: string;
  }
}
