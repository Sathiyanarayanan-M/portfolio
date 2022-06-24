const axios = require("axios");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.news_api_key);

exports.getNewsAPI = async (props = {}) => {
  try {
    const res = await newsapi.v2.topHeadlines({
      ...props,
    });

    return { data: res, error: false };
  } catch (error) {
    return { data: null, error };
  }
};
