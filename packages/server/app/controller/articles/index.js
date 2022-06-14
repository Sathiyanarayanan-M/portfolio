const fireStore = require("../../utils/firebase/firestore");
const utils = require("../../utils/api/getNewsAPI");
exports.articlesList = async (req, res, next) => {
  const { getNewsAPI } = utils;
  const data = await getNewsAPI({
    category: "technology",
  });
  if (data?.error) {
    return next(error);
  }
  return res.send({ data });
};
