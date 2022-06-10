const fireStore = require("../../utils/firebase/firestore");
exports.projectList = async (req, res, next) => {
  const { getCollectionData } = fireStore.useFirestore();

  try {
    const data = await getCollectionData("projects");
    return res.status(200).json({
      error: false,
      data,
    });
  } catch (e) {
    return next(e);
  }
};
