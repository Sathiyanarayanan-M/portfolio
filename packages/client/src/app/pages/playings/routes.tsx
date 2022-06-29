import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () =>
  Router.useRoutes([
    {
      path: "/*",
      children: [
        {
          index: true,
          element: <Pages.Playings.Main />,
        },
        {
          path: "codeEditor",
          element: <Pages.Playings.Pages.CodeEditor.Main />,
        },
      ],
    },
  ]);
