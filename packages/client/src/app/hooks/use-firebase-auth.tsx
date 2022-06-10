import * as Firebase from "firebase/auth";
import * as Hooks from "src/app/hooks";

export const useFirebaseAuth = () => {
  const auth = Firebase.getAuth(Hooks.useFirebaseApp());

  const signInWithEmailAndPassword = (email: string, password: string) => {
    return Firebase.signInWithEmailAndPassword(auth, email, password);
  };

  const getUser = () => auth.currentUser;

  const getIdToken = () => auth.currentUser?.getIdToken();

  const authStateChanged = (callback: (user: Firebase.User | null) => void) => {
    Firebase.onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        return callback(user);
      } else {
        return callback(null);
      }
    });
  };

  return {
    signInWithEmailAndPassword,
    getUser,
    authStateChanged,
    getIdToken,
  };
};
