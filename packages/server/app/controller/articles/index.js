const utils = require('../../utils/api/getNewsAPI');
const CommonUtils = require('../../utils/api/common');

exports.articlesList = async (req, res, next) => {
  const { getUserLocation } = CommonUtils;
  const userIP = req.headers['x-forwarded-for'] || req.ip;
  const response = await getUserLocation(userIP);
  const country = response.status === 'success' ? response.countryCode : 'US';
  const { getNewsAPI } = utils;
  const defaultNewsQueries = {
    category: 'technology',
    country,
    language: 'en',
    pageSize: 10,
    page: 1,
    ...req.query,
  };

  const data = await getNewsAPI(defaultNewsQueries);
  if (data?.error) {
    return next(data?.error);
  }
  return res.send({
    userIP,
    data: data.data,
  });
};
