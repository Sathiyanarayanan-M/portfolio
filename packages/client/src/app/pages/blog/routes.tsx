import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as PageRoutes from "src/app/routes";

export const Routes = () =>
  Router.useRoutes([
    {
      index: true,
      element: <Pages.Blog.Main />,
    },
    {
      path: "post-blog",
      element: (
        <PageRoutes.PrivateRoute>
          <Pages.Blog.Pages.PostBlog.Main />
        </PageRoutes.PrivateRoute>
      ),
    },
  ]);
