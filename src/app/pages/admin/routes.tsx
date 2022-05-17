import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () =>
  Router.useRoutes([
    {
      index: true,
      element: <Pages.Admin.Main />,
    },
    {
      path: "manage-projects",
      element: <Pages.Admin.ManageProjects.Main />,
    },
  ]);
