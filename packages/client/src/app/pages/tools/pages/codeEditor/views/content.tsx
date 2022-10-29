import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as MuiLab from "@mui/lab";
import Loadsh from "lodash";
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
  } = Pages.Tools.Pages.CodeEditor.Hooks.compileCode();

  const stdOut = atob(resData?.stdout || "");
  const stdErr = atob(resData?.stderr || "");

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
    const base64SourceCode = btoa(codeValue);
    const base64StdIn = btoa(stdIn);
    postCompile({
      language_id: language,
      source_code: base64SourceCode,
      stdin: base64StdIn,
    });
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
        Pages.Tools.Pages.CodeEditor.Constants.languagesAvailable.find(
          (item) => item.id === language
        )?.template as string;
      setCodeValue(templateLanguage);
    }
  }, [language]);

  return (
    <Mui.Box
      sx={{
        px: { xs: 2, md: 5 },
        py: { xs: 2, md: 0 },
        overflowY: { xs: "scroll", lg: "auto" },
      }}
    >
      <Mui.Typography
        sx={{
          mb: 1,
          fontSize: "18px",
          fontWeight: "600",
        }}
      >{`${
        Pages.Tools.Pages.CodeEditor.Constants.languagesAvailable.find(
          (item) => item.id === language
        )?.name
      } Compiler`}</Mui.Typography>
      <Mui.Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-evenly"
        spacing={2}
      >
        <Mui.Paper
          elevation={2}
          sx={{
            width: { xs: "100%", lg: "70vw" },
            height: "80vh",
            p: 2,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
          }}
        >
          <Editor
            height="100%"
            width="100%"
            language={
              Pages.Tools.Pages.CodeEditor.Constants.languagesAvailable.find(
                (item) => item.id === language
              )?.value
            }
            value={codeValue}
            theme={theme}
            onChange={handleCodeChange}
            options={{
              lineNumbersMinChars: 3,
              minimap: {
                enabled: false,
              },
              lineDecorationsWidth: 0,
              overviewRulerBorder: false,
              scrollBeyondLastLine: false,
            }}
          />
        </Mui.Paper>
        <Mui.Stack
          spacing={2}
          sx={{ minWidth: 300, pt: 2, maxHeight: "80vh", width: "100%" }}
        >
          <Components.Fields.Dropdown
            value={theme}
            onChange={handleThemeChange}
            dataList={Pages.Tools.Pages.CodeEditor.Constants.ThemeList}
            label="Theme"
            selectProps={{
              sx: {
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 0.5px )",
                WebkitBackdropFilter: "blur( 0.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                fontSize: "14px",
              },
              MenuProps: {
                sx: {
                  maxHeight: "50vh",
                  marginTop: "4px",
                },
              },
            }}
            menuItemProps={{
              sx: {
                fontSize: "14px",
              },
            }}
          />
          <Components.Fields.Dropdown
            value={language}
            onChange={handleChangeLanguage}
            dataList={Pages.Tools.Pages.CodeEditor.Constants.languagesAvailable.map(
              (item) => ({ label: item.label, value: item.id })
            )}
            label="Language"
            selectProps={{
              sx: {
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 0.5px )",
                WebkitBackdropFilter: "blur( 0.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                // color: "common.white",
                fontSize: "14px",
              },
              MenuProps: {
                sx: {
                  maxHeight: "50vh",
                  marginTop: "4px",
                },
              },
            }}
            menuItemProps={{
              sx: {
                fontSize: "14px",
              },
            }}
          />
          <Mui.Accordion
            elevation={0}
            defaultExpanded
            disableGutters
            sx={{
              // background: "#F2F4F4",
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0.5px )",
              WebkitBackdropFilter: "blur( 0.5px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              outline: "1px solid #85929E",
              "&:before": {
                display: "none",
              },
            }}
          >
            <Mui.AccordionSummary
              sx={{
                // color: "common.white",
                fontSize: "14px",
              }}
              expandIcon={<MuiIcons.ExpandMore />}
            >
              Add Custom Input
            </Mui.AccordionSummary>
            <Mui.AccordionDetails>
              <Mui.TextField
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  sx: {
                    p: 1,
                    fontSize: 12,
                    // color: "common.white",
                    border: (theme) => "1px solid" + theme.palette.primary.main,
                  },
                }}
                sx={{ fontSize: 1 }}
                onChange={(event) => setStdIn(event.target.value)}
              />
            </Mui.AccordionDetails>
          </Mui.Accordion>

          <Components.MuiComponents.CustomLoadingButton
            fullWidth
            text="Compile"
            loading={isCompiling}
            onClick={handleCompileClick}
            variant="outlined"
            sx={{ textTransform: "none" }}
          />
          <Mui.Box
            display={{
              display: stdErr ? "block" : "none",
            }}
          >
            <Mui.Typography variant="h6" sx={{ mb: 1, fontWeight: "600" }}>
              Error:
            </Mui.Typography>
            <Mui.Box
              sx={{
                m: 0,
                // background: "#fad1d0",
                maxHeight: 250,
                overflow: "auto",
                border: "1px solid #EB4747",
                borderRadius: "12px",
              }}
            >
              <Mui.Typography
                variant="body2"
                color="error"
                sx={{ p: 2, whiteSpace: "pre-wrap" }}
                component="pre"
              >
                {stdErr}
              </Mui.Typography>
            </Mui.Box>
          </Mui.Box>
          <Mui.Box
            display={{
              display: stdOut && !stdErr ? "block" : "none",
            }}
          >
            <Mui.Typography variant="h6" sx={{ mb: 1, fontWeight: "600" }}>
              Output
            </Mui.Typography>
            <Mui.Paper
              elevation={2}
              sx={{
                m: 0,
                // background: "#34495E",
                maxHeight: 250,
                overflow: "auto",
              }}
            >
              <Mui.Typography
                variant="body2"
                color="common.black"
                sx={{ p: 2, whiteSpace: "pre-wrap" }}
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
