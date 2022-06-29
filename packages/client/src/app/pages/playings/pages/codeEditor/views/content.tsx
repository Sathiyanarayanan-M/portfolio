import React from "react";
import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Content = () => {
  const [theme, setTheme] = React.useState("vs");
  const { getFromLocalStorage, setToLocalStorage } = Hooks.useLocalStorage();
  const handleChangeLanguage = (value: string | undefined) => {
    console.log(value);
  };
  const handleThemeChange = (value: string) => {
    setToLocalStorage("code-editor-theme", value);
    setTheme(value);
  };
  React.useEffect(() => {
    const themeFromLocalStorage = getFromLocalStorage("code-editor-theme");
    console.log(themeFromLocalStorage);
    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    }
  }, []);

  return (
    <Mui.Paper sx={{ m: 5 }}>
      <Pages.Playings.Pages.CodeEditor.Views.ThemeDropdown
        theme={theme}
        handleThemeChange={handleThemeChange}
      />
      <Pages.Playings.Pages.CodeEditor.Views.EditorComponent
        onChange={handleChangeLanguage}
        language="javascript"
        value={`console.log(1);`}
        theme={theme}
      />
    </Mui.Paper>
  );
};
