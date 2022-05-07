import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Main = () =>
  Router.useRoutes([
    {
      path: "*",
      element: <Components.PageNotFound.Main />,
    },
    {
      path: "/*",
      children: [
        {
          index: true,
          element: <Pages.Home.Main />,
        },
      ],
    },
  ]);
