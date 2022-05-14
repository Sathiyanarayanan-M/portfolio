import React from "react";
import * as Firestore from "firebase/firestore";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";

export const useFirestore = () => {
  const db = Firestore.getFirestore(Hooks.useFirebaseApp());

  const getData = async (collectionName: string) => {
    const collection = Firestore.collection(db, collectionName);
    const snapshot = await Firestore.getDocs(collection);
    const listData = snapshot.docs.map((doc) => doc.data());
    return listData;
  };

  const addData = async (collectionName: string, data: any) => {
    const collection = Firestore.collection(db, collectionName);
    const snapshot = await Firestore.addDoc(collection, data);
    return snapshot;
  };

  return { getData, addData };
};
