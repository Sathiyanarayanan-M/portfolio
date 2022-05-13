import * as FirebaseApp from "firebase/app";
import * as Constants from "src/constants";

export const useFirebaseApp = () =>
  FirebaseApp.initializeApp(Constants.FIREBASE_CONFIG);
