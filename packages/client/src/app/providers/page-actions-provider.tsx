import * as Hooks from "src/app/hooks";

export const PageActionsProvider = ({ children }: Child) => {
  const { data } = Hooks.useGetUserGeoLocation();
  return <> {children}</>;
};
