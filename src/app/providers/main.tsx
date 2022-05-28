import * as Providers from "src/app/providers";
export const Main = ({ children }: Child) => {
  return (
    <Providers.UtilsContextProvider>
      <Providers.SnackbarProvider>{children}</Providers.SnackbarProvider>
    </Providers.UtilsContextProvider>
  );
};
