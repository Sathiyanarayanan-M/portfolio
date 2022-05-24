import * as Firebase from "firebase/auth";
import * as Hooks from "src/app/hooks";

export const useFirebaseAuth = () => {
  const auth = Firebase.getAuth(Hooks.useFirebaseApp());

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    const result = await Firebase.signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return result;
  };

  const getUser = () => {
    const user = auth.currentUser;
    return user;
  };

  return {
    signInWithEmailAndPassword,
    getUser,
  };
};
