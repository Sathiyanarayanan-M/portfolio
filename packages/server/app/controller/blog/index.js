const firebase = require("../../utils/firebase/firestore");

exports.postBlog = () => {};

exports.getBlogs = (req, res, next) => {
  const { getCollectionData } = firebase.useFirestore();
};
