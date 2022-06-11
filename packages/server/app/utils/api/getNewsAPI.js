const axios = require("axios");

exports.getNewsAPI = async (catagory = "") => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.news_api_key}&category=${catagory}`
  );
  const { data } = res;
  return data;
};
