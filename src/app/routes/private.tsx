import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const PrivateRoute = ({ children }: PrivateRouteType.Props) => {
  const { getUser } = Hooks.useFirebaseAuth();
  console.log(getUser());

  if (!getUser()) {
    return <Pages.Auth.Main />;
  }

  return <>{children}</>;
};

export declare namespace PrivateRouteType {
  export type Props = Child;
}
