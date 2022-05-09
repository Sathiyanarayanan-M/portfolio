import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Layouts from "src/app/layouts";
import * as Components from "src/app/components";

export const Main = () =>
  Router.useRoutes([
    {
      path: "*",
      element: <Components.PageNotFound.Main />,
    },
    {
      path: "/*",
      element: <Layouts.Master.Main />,
      children: [
        {
          path: "/*",
          element: <Pages.Home.Main />,
        },
      ],
    },
  ]);
