import React from "react";
import * as Mui from "@mui/material";
import * as Contexts from "src/app/contexts";

export const SnackbarProvider = ({ children }: Contexts.SnackbarType.Props) => {
  const [snack, setSnack] = React.useState<Contexts.SnackbarType.State>({
    message: "",
    severity: undefined,
    open: false,
  });

  const handleSnackbar = (snack: Contexts.SnackbarType.State) => {
    setSnack(snack);
  };

  const handleClose = () =>
    setSnack({
      ...snack,
      open: false,
    });

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      handleClose();
    }, 4000);
    return () => clearInterval(timeoutID);
  }, [snack]);

  return (
    <Contexts.SnackbarContext.Provider
      value={{
        setSnack: handleSnackbar,
      }}
    >
      <Mui.Snackbar
        open={snack.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Mui.Alert onClose={handleClose} severity={snack.severity}>
          {snack.message}
        </Mui.Alert>
      </Mui.Snackbar>
      {children}
    </Contexts.SnackbarContext.Provider>
  );
};
