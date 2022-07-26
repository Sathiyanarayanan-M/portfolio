import * as MuiIcons from "@mui/icons-material";
export const ToolsList: ToolsListType[] = [
  {
    title: "Code Editor",
    description:
      "Write and run your code using our online editor. You can take inputs from the user in this editor.",
    icon: <MuiIcons.Code />,
    iconType: "icon",
    value: "codeEditor",
    path: "/tools/codeEditor",
  },
];

export interface ToolsListType {
  title: string;
  description: string;
  icon: JSX.Element;
  iconType: string;
  value: string;
  path: string;
}
