import React from "react";
import * as Mui from "@mui/material";
import * as Contexts from "src/app/contexts";

export const UtilsContextProvider = ({
  children,
}: Contexts.UtilsContextType.Props) => {
  const [utils, setUtils] = React.useState<Contexts.UtilsContextType.State>({});

  const handleSetUtils = (utils: Contexts.UtilsContextType.State) => {
    setUtils((prevUtils) => ({ ...prevUtils, ...utils }));
  };

  return (
    <Contexts.UtilsContext.Provider
      value={{
        setUtils: handleSetUtils,
        utils,
      }}
    >
      {children}
    </Contexts.UtilsContext.Provider>
  );
};
