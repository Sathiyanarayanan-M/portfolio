import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Themes from "src/themes";
import * as Provider from "src/app/providers";

export const Main = () => {
  return (
    <Provider.Main>
      <Themes.Main>
        <Router.BrowserRouter>
          <Routes.Main />
        </Router.BrowserRouter>
      </Themes.Main>
    </Provider.Main>
  );
};
