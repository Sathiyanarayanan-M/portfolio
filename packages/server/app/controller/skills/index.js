const fireStore = require("../../utils/firebase/firestore");

exports.skillList = async (req, res, next) => {
  const { getCollectionData } = fireStore.useFirestore();

  try {
    const data = await getCollectionData("skills");
    return res.status(200).json({
      error: false,
      data,
    });
  } catch (e) {
    return next(e);
  }
};
