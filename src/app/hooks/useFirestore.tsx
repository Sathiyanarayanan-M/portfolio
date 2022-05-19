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

  const getSingleDoc = async (docPath: string) => {
    const document = Firestore.doc(db, docPath);
    const doc = await Firestore.getDoc(document);
    return doc.data();
  };

  const addData = async (docPath: string, data: any) => {
    const document = Firestore.doc(db, docPath);
    const snapshot = await Firestore.setDoc(document, data);
    return snapshot;
  };

  const updateData = async (docPath: string, data: any) => {
    const document = Firestore.doc(db, docPath);
    const snapshot = await Firestore.updateDoc(document, data);
    return snapshot;
  };

  const deleteData = async (docPath: string) => {
    const document = Firestore.doc(db, docPath);
    const snapshot = await Firestore.deleteDoc(document);
    return snapshot;
  };

  const dataSnapShot = (
    collectionName: string,
    observer: (doc: Firestore.QuerySnapshot<Firestore.DocumentData>) => void
  ) => {
    const collection = Firestore.collection(db, collectionName);
    const snapshot = Firestore.onSnapshot(collection, observer);
    return snapshot;
  };

  return {
    getData,
    addData,
    getSingleDoc,
    updateData,
    deleteData,
    dataSnapShot,
  };
};
