import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";

export const Main = () => {
  return (
    <Router.BrowserRouter>
      <Routes.Main />
    </Router.BrowserRouter>
  );
};
