import * as Providers from "src/app/providers";
export const Main = ({ children }: Child) => {
  return <Providers.SnackbarProvider>{children}</Providers.SnackbarProvider>;
};
