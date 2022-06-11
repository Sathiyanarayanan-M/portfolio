const fireStore = require("../../utils/firebase/firestore");
const utils = require("../../utils/api/getNewsAPI");
exports.articlesList = async (req, res, next) => {
  const { getNewsAPI } = utils;
  const data = await getNewsAPI("technology");
  res.send({ data });
};
