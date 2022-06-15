const fireStore = require("../../utils/firebase/firestore");
const utils = require("../../utils/api/getNewsAPI");
exports.articlesList = async (req, res, next) => {
  const { getNewsAPI } = utils;
  const defaultNewsQueries = {
    catagory: "technology",
    country: "us",
    pageSize: 10,
    page: 1,
    ...req.query,
  };

  const data = await getNewsAPI(defaultNewsQueries);
  if (data?.error) {
    return next(error);
  }
  return res.send({
    userip: req.headers["x-forwarded-for"] || req.ip,
    data: data.data,
  });
};
