import React from "react";
import * as FirebaseAuth from "firebase/auth";
import * as Hooks from "src/app/hooks";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";

export const PrivateRoute = ({ children }: PrivateRouteType.Props) => {
  const { getUser, authStateChanged } = Hooks.useFirebaseAuth();
  const [user, setUser] = React.useState<FirebaseAuth.User | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    authStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Components.SplashScreen />;
  }

  if (!user) {
    return <Pages.Auth.Main />;
  }

  return <>{children}</>;
};

export declare namespace PrivateRouteType {
  export type Props = Child;
}
