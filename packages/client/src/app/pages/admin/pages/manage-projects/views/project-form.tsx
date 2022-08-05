import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Hooks from "src/app/hooks";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";

export const ProjectFormSchema = Yup.object().shape({
  title: Yup.string().required("Required").min(3, "Too Short!"),
  description: Yup.string().required("Required").min(3, "Too Short!"),
  detailsUrl: Yup.string().matches(
    /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
    "Url must start with http/https"
  ),
});

export const ProjectForm = () => {
  const [isFileUploading, setIsFileUploading] = React.useState(false);
  const formikContext = Formik.useFormikContext<ProjectFormType.FormValues>();
  const { setSnack } = React.useContext(Contexts.SnackbarContext);

  const { uploadFile, getDownloadURL, getRefFromUrl, deleteFile } =
    Hooks.useFirebaseStorage();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsFileUploading(true);
    const base64File = (await Hooks.useConvertBase64(
      event?.target?.files?.[0] as Blob
    )) as string;

    const uploadedFile = await uploadFile(
      base64File,
      `projects/${Hooks.useGenerateUniqueId(formikContext.values.title || "")}`
    );

    const downloadUrl = await getDownloadURL(uploadedFile.metadata.fullPath);
    formikContext.setFieldValue("image", downloadUrl);
    setIsFileUploading(false);
    setSnack({
      open: true,
      message: "Image Uploaded",
      severity: "success",
    });
  };

  const handleDeleteFile = async () => {
    const fileUrl = formikContext.values.image;
    const fileRef = getRefFromUrl(fileUrl);
    await deleteFile(fileRef.fullPath);
    formikContext.setFieldValue("image", "");
    setSnack({
      open: true,
      message: "Image Deleted",
      severity: "success",
    });
  };

  return (
    <Formik.Form>
      <Mui.Stack spacing={3}>
        <Mui.TextField
          error={!!formikContext.errors.title && !!formikContext.touched.title}
          label="Title"
          name="title"
          type="text"
          variant="filled"
          focused
          sx={{
            "& input": {
              color: "primary.100",
            },
          }}
          fullWidth
          onChange={formikContext.handleChange}
          value={formikContext.values.title}
          required
          helperText={<Formik.ErrorMessage name="title" />}
        />

        <Mui.TextField
          error={
            !!formikContext.errors.description &&
            !!formikContext.touched.description
          }
          label="Description"
          name="description"
          type="text"
          variant="filled"
          focused
          sx={{
            "& input": {
              color: "primary.100",
            },
          }}
          onChange={formikContext.handleChange}
          value={formikContext.values.description}
          fullWidth
          required
          helperText={<Formik.ErrorMessage name="description" />}
        />
        <Mui.TextField
          error={!!formikContext.errors.role && !!formikContext.touched.role}
          label="Role"
          name="role"
          type="text"
          variant="filled"
          focused
          sx={{
            "& input": {
              color: "primary.100",
            },
          }}
          onChange={formikContext.handleChange}
          value={formikContext.values.role}
          fullWidth
          required
          helperText={<Formik.ErrorMessage name="role" />}
        />
        <Mui.TextField
          error={
            !!formikContext.errors.techsUsed &&
            !!formikContext.touched.techsUsed
          }
          label="Tech Used"
          name="techsUsed"
          type="text"
          variant="filled"
          focused
          sx={{
            "& input": {
              color: "primary.100",
            },
          }}
          onChange={formikContext.handleChange}
          value={formikContext.values.techsUsed}
          fullWidth
          required
          helperText={<Formik.ErrorMessage name="techsUsed" />}
        />
        <Mui.TextField
          error={
            !!formikContext.errors.detailsUrl &&
            !!formikContext.touched.detailsUrl
          }
          label="Details url"
          name="detailsUrl"
          type="text"
          variant="filled"
          focused
          sx={{
            "& input": {
              color: "primary.100",
            },
          }}
          onChange={formikContext.handleChange}
          value={formikContext.values.detailsUrl}
          fullWidth
          required
          helperText={<Formik.ErrorMessage name="detailsUrl" />}
        />
        <Mui.Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <label
            htmlFor="contained-button-file"
            style={{ width: "fit-content" }}
          >
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              hidden
              onChange={handleFileUpload}
            />
            <MuiLab.LoadingButton
              loading={isFileUploading}
              variant="outlined"
              component="span"
            >
              Upload
            </MuiLab.LoadingButton>
          </label>
          {formikContext.values.image && (
            <React.Fragment>
              <Mui.Avatar src={formikContext.values.image} />

              <Mui.Link onClick={handleDeleteFile} color="error">
                Delete File
              </Mui.Link>
            </React.Fragment>
          )}
        </Mui.Stack>
        <Components.MuiComponents.CustomLoadingButton
          fullWidth
          type="submit"
          disabled={isFileUploading}
          text="Submit"
          loading={formikContext.isSubmitting}
          variant="outlined"
          sx={{ textTransform: "none" }}
        />
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
