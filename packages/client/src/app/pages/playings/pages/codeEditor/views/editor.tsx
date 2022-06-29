import React from "react";
import Editor, { OnChange } from "@monaco-editor/react";
import * as Pages from "src/app/pages";

export const EditorComponent = (props: ICodeEditor.Props) => {
  const { value, onChange, language, theme } = props;
  return (
    <div>
      <Editor
        height="85vh"
        width={`100%`}
        language={language}
        value={value}
        theme={theme}
        onChange={onChange}
      />
    </div>
  );
};

export declare namespace ICodeEditor {
  export interface Props {
    onChange: OnChange;
    value: string;
    language: string;
    theme: string;
  }
}
