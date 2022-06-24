const fireStore = require("../../utils/firebase/firestore");
const utils = require("../../utils/api/getNewsAPI");
const CommonUtils = require("../../utils/api/common");
exports.articlesList = async (req, res, next) => {
  const { getUserLocation } = CommonUtils;
  const response = await getUserLocation(req.ip);
  const country = response.status === "success" ? response.countryCode : "US";
  console.log(response);
  const { getNewsAPI } = utils;
  const defaultNewsQueries = {
    category: "technology",
    country,
    language: "en",
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
