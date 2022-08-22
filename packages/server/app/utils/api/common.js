const Axios = require('axios');

const locationUrl = process.env.user_location_api;
exports.getUserLocation = async (userIp = '') => {
  const res = await Axios.default.get(`${locationUrl}${userIp}`);
  return res.data;
};
