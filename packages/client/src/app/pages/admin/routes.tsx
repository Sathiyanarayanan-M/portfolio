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
      element: <Pages.Admin.Pages.ManageProjects.Main />,
    },
    {
      path: "manage-blog",
      element: <Pages.Admin.Pages.ManageBlog.Main />,
    },
  ]);
