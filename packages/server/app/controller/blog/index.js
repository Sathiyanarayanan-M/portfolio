const firebase = require("../../utils/firebase/firestore");

exports.postBlog = async (req, res, next) => {
  const { addCollectiondata } = firebase.useFirestore();

  try {
    const formatData = {
      ...req.body,
      author: {
        uid: req.userData.uid,
      },
      likes: 0,
    };
    const firebaseResponse = await addCollectiondata(`blogs`, formatData);
    res.status(200).json({
      status: "success",
      message: "Post submitted sucessfully",
      data: {
        id: firebaseResponse,
      },
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.getBlogs = async (req, res, next) => {
  const { getCollectionData } = firebase.useFirestore();

  try {
    const firebaseRes = await getCollectionData("blogs");
    res.status(200).json({
      status: "success",
      data: firebaseRes,
    });
  } catch (e) {
    next(e);
  }
};
