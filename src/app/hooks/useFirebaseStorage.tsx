import * as FirebaseStorage from "firebase/storage";
import * as Hooks from "src/app/hooks";

export const useFirebaseStorage = () => {
  const storage = FirebaseStorage.getStorage(Hooks.useFirebaseApp());

  const getFile = async (filePath: string) => {
    const file = FirebaseStorage.ref(storage, filePath);
    const snapshot = await FirebaseStorage.getDownloadURL(file);
    return snapshot;
  };

  const uploadFile = async (file: File | Blob, filePath: string) => {
    const storageRef = FirebaseStorage.ref(storage, filePath);
    const uploadTask = await FirebaseStorage.uploadBytes(storageRef, file);
    return uploadTask;
  };

  const getDownloadURL = async (filePath: string) => {
    const file = FirebaseStorage.ref(storage, filePath);
    const snapshot = await FirebaseStorage.getDownloadURL(file);
    return snapshot;
  };

  return { getFile, uploadFile, getDownloadURL };
};
