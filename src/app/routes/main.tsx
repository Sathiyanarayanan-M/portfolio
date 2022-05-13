import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Layouts from "src/app/layouts";
import * as Components from "src/app/components";
import * as Routes from "src/app/routes";

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
          index: true,
          element: <Router.Navigate to="/home" />,
        },
        {
          path: "home",
          element: <Pages.Home.Main />,
        },
        {
          path: "about",
          element: <Pages.About.Main />,
        },
        {
          path: "projects",
          element: <Pages.Projects.Main />,
        },
        {
          path: "funZone",
          element: <Pages.Funzone.Main />,
        },
        {
          path: "admin",
          element: (
            <Routes.PrivateRoute>
              <Pages.Admin.Main />
            </Routes.PrivateRoute>
          ),
        },
      ],
    },
  ]);
