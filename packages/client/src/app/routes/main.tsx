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
          path: "funZone",
          element: <Pages.Funzone.Main />,
        },
        { path: "articles", element: <Pages.Articles.Main /> },
        {
          path: "admin/*",
          element: (
            <Routes.PrivateRoute>
              <Pages.Admin.Routes />
            </Routes.PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "auth/*",
      element: <Pages.Auth.Main />,
    },
  ]);
