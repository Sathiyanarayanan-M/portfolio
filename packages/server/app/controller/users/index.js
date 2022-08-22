const firebase = require('../../utils/firebase/firestore');

exports.createUser = async (req, res, next) => {
  const { addCollectiondata } = firebase.useFirestore();

  try {
    const formatData = {
      ...req.body,
      author: {
        uid: req.userData.uid,
      },
      likes: 0,
    };
    const firebaseResponse = await addCollectiondata('blogs', formatData);
    res.status(200).json({
      status: 'success',
      message: 'Post submitted sucessfully',
      data: {
        id: firebaseResponse,
      },
    });
  } catch (e) {
    next(e);
  }
};
