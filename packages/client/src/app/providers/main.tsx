import * as Providers from "src/app/providers";
export const Main = ({ children }: Child) => {
  return (
    <Providers.ReactQueryProvider>
      <Providers.UtilsContextProvider>
        <Providers.SnackbarProvider>
          <Providers.PageActionsProvider>
            {children}
          </Providers.PageActionsProvider>
        </Providers.SnackbarProvider>
      </Providers.UtilsContextProvider>
    </Providers.ReactQueryProvider>
  );
};
