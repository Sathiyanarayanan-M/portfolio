import * as FirebaseStorage from "firebase/storage";
import * as Hooks from "src/app/hooks";

export const useFirebaseStorage = () => {
  const storage = FirebaseStorage.getStorage(Hooks.useFirebaseApp());

  const getFile = async (filePath: string) => {
    const file = FirebaseStorage.ref(storage, filePath);
    const snapshot = await FirebaseStorage.getDownloadURL(file);
    return snapshot;
  };

  const uploadFile = async (file: string, filePath: string) => {
    const storageRef = FirebaseStorage.ref(storage, filePath);
    const uploadTask = await FirebaseStorage.uploadString(
      storageRef,
      file,
      "data_url"
    );
    return uploadTask;
  };

  const getRefFromUrl = (url: string) => {
    const ref = FirebaseStorage.ref(storage, url);
    return ref;
  };

  const deleteFile = async (filePath: string) => {
    const storageRef = FirebaseStorage.ref(storage, filePath);
    const deleteTask = await FirebaseStorage.deleteObject(storageRef);
    return deleteTask;
  };

  const getDownloadURL = async (filePath: string) => {
    const file = FirebaseStorage.ref(storage, filePath);
    const snapshot = await FirebaseStorage.getDownloadURL(file);
    return snapshot;
  };

  return { getFile, uploadFile, getDownloadURL, getRefFromUrl, deleteFile };
};
