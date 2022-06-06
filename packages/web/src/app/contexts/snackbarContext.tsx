import React from "react";
import * as Mui from "@mui/material";

export const SnackbarContext = React.createContext<SnackbarType.Context>({
  setSnack: () => {},
});

export declare namespace SnackbarType {
  export type Context = {
    setSnack: (snack: SnackbarType.State) => void;
  };
  export type Props = {
    children: React.ReactNode;
  };
  export type State = {
    message: string;
    severity: Mui.AlertColor | undefined;
    open: boolean;
  };
}
