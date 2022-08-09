const firebaseAdmin = require("firebase-admin");

exports.useFirestore = () => {
  const db = firebaseAdmin.firestore();

  const getCollectionData = async (collectionName) => {
    const collectionRef = db.collection(collectionName);
    const querySnapshot = await collectionRef.get();
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  };

  const addCollectiondata = async (collectionName, data) => {
    const serverTimestamp = firebaseAdmin.firestore.Timestamp.now().toMillis();
    const formattedData = {
      ...data,
      timestamp: serverTimestamp,
    };
    const collectionRef = db.collection(collectionName);
    const response = await collectionRef.add(formattedData);
    return response.id;
  };

  return { getCollectionData, addCollectiondata };
};
