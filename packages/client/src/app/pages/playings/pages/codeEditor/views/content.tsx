import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as MuiLab from "@mui/lab";
import * as Loadsh from "lodash";
import Editor from "@monaco-editor/react";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Components from "src/app/components";

export const Content = () => {
  const [theme, setTheme] = React.useState("vs-dark");
  const [codeValue, setCodeValue] = React.useState("");
  const [language, setLanguage] = React.useState(63);
  const [stdIn, setStdIn] = React.useState("");
  const { getFromLocalStorage, setToLocalStorage } = Hooks.useLocalStorage();

  const {
    mutate: postCompile,
    data: resData,
    isLoading: isCompiling,
  } = Pages.Playings.Pages.CodeEditor.Hooks.compileCode({
    language_id: language,
    source_code: codeValue,
    stdin: stdIn,
  });

  const stdOut = atob(resData?.stdout || "");

  const saveCodeToLocalStorage = (code: string) => {
    setToLocalStorage(`${language}-code-template`, code);
  };

  const storageHandler = Loadsh.debounce(saveCodeToLocalStorage, 500);

  const handleChangeLanguage = (value: string | number) => {
    setLanguage(value as number);
    setToLocalStorage(`langage-selected`, `${value}`);
  };

  const handleThemeChange = (value: string | number) => {
    setToLocalStorage("code-editor-theme", value as string);
    setTheme(value as string);
  };

  const handleCodeChange = (value?: string) => {
    setCodeValue(value as string);
    storageHandler(value as string);
  };

  const handleCompileClick = () => {
    postCompile();
  };

  React.useEffect(() => {
    const themeFromLocalStorage = getFromLocalStorage("code-editor-theme");
    const languageFromLocalStorage = getFromLocalStorage(`langage-selected`);

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    }
    if (languageFromLocalStorage) {
      setLanguage(+languageFromLocalStorage);
    } else {
      setToLocalStorage("langage-selected", `${language}`);
    }
  }, []);

  React.useEffect(() => {
    const codeFromLocalStorage = getFromLocalStorage(
      `${language}-code-template`
    );
    if (codeFromLocalStorage) {
      setCodeValue(codeFromLocalStorage);
    } else {
      const templateLanguage =
        Pages.Playings.Pages.CodeEditor.Constants.languagesAvailable.find(
          (item) => item.id === language
        )?.template as string;
      setCodeValue(templateLanguage);
    }
  }, [language]);

  return (
    <Mui.Box sx={{ m: 5 }}>
      <Mui.Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Mui.Paper
          elevation={2}
          sx={{ width: "70vw", height: "80vh", p: "20px 10px" }}
        >
          <Editor
            height="100%"
            width="100%"
            language={
              Pages.Playings.Pages.CodeEditor.Constants.languagesAvailable.find(
                (item) => item.id === language
              )?.value
            }
            value={codeValue}
            theme={theme}
            onChange={handleCodeChange}
            options={{
              lineNumbersMinChars: 6,
            }}
          />
        </Mui.Paper>
        <Mui.Stack spacing={3} sx={{ width: 300 }}>
          <Components.Fields.Dropdown
            value={theme}
            onChange={handleThemeChange}
            dataList={Pages.Playings.Pages.CodeEditor.Constants.ThemeList}
            label="Theme"
          />
          <Components.Fields.Dropdown
            value={language}
            onChange={handleChangeLanguage}
            dataList={Pages.Playings.Pages.CodeEditor.Constants.languagesAvailable.map(
              (item) => ({ label: item.label, value: item.id })
            )}
            label="Language"
          />
          <Mui.Accordion
            elevation={0}
            defaultExpanded
            disableGutters
            sx={{
              background: "#F2F4F4",
              outline: "1px solid #85929E",
              "&:before": {
                display: "none",
              },
            }}
          >
            <Mui.AccordionSummary expandIcon={<MuiIcons.ExpandMore />}>
              Add Custom Input
            </Mui.AccordionSummary>
            <Mui.AccordionDetails>
              <Mui.TextField
                multiline
                rows={4}
                fullWidth
                InputProps={{ sx: { p: 1, fontSize: 12 } }}
                sx={{ fontSize: 1 }}
                onChange={(event) => setStdIn(event.target.value)}
              />
            </Mui.AccordionDetails>
          </Mui.Accordion>
          <MuiLab.LoadingButton
            variant="contained"
            onClick={handleCompileClick}
            loading={isCompiling}
          >
            Compile
          </MuiLab.LoadingButton>
          <Mui.Box sx={{ height: "100%" }}>
            <Mui.Typography variant="h6" sx={{ mb: 1, fontWeight: "600" }}>
              Output
            </Mui.Typography>
            <Mui.Paper
              elevation={2}
              sx={{
                height: 300,
                overflow: "auto",
                m: 0,
                background: "#34495E",
              }}
            >
              <Mui.Typography
                variant="body2"
                color="#E5E8E8"
                sx={{ p: 2 }}
                component="pre"
              >
                {stdOut}
              </Mui.Typography>
            </Mui.Paper>
          </Mui.Box>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Box>
  );
};
