const firebaseAdmin = require("firebase-admin");

exports.useFirestore = () => {
  const db = firebaseAdmin.firestore();

  const getCollectionData = async (collectionName) => {
    const collectionRef = db.collection(collectionName);
    const querySnapshot = await collectionRef.get();
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  };

  return { getCollectionData };
};
