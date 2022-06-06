import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => {
  return (
    <Mui.Box>
      <Pages.Admin.ManageProjects.Views.Content />
    </Mui.Box>
  );
};

export declare namespace MainTypes {
  export interface FormValues {
    title: string;
    description: string;
    role: string;
    techsUsed: string;
    detailsUrl: string;
    image: string;
  }
}
