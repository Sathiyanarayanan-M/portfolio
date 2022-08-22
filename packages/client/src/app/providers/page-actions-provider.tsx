import * as FirebaseAuth from "firebase/auth";
import * as Hooks from "src/app/hooks";
export const PageActionsProvider = ({ children }: Child) => {
  const { setToLocalStorage } = Hooks.useLocalStorage();
  const auth = FirebaseAuth.getAuth(Hooks.useFirebaseApp());
  auth.onAuthStateChanged(async (user) => {
    const idToken = await user?.getIdToken();
    if (user) {
      setToLocalStorage("user", idToken);
    }
  });
  return <>{children}</>;
};
