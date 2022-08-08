const firebase = require("../../utils/firebase/firestore");

exports.postBlog = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Post submitted sucessfully",
  });
};

exports.getBlogs = (req, res, next) => {
  const { getCollectionData } = firebase.useFirestore();
};
