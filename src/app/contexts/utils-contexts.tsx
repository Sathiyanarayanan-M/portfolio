import React from "react";
import * as Mui from "@mui/material";

export const UtilsContext = React.createContext<UtilsContextType.Context>({
  setUtils: () => {},
  utils: {},
});

export declare namespace UtilsContextType {
  export type Context = {
    setUtils: (utils: UtilsContextType.State) => void;
    utils: UtilsContextType.State;
  };
  export type Props = {
    children: React.ReactNode;
  };
  export type State = {
    [keys in string]: any;
  };
}
