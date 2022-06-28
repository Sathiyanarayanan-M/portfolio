const Axios = require("axios");
const apiConstants = {
  baseUrl: process.env.compiler_api,
  compilerHost: process.env.compiler_host,
  secretKey: process.env.compiler_secret,
};
exports.submitCode = async (props) => {
  const options = {
    method: "POST",
    url: `${apiConstants.baseUrl}/submissions`,
    params: { base64_encoded: "true", wait: "true", fields: "*" },
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": apiConstants.secretKey,
      "X-RapidAPI-Host": apiConstants.compilerHost,
    },
    data: props,
  };
  try {
    const res = await Axios.default.request(options);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

exports.getLanguages = async (submission_id) => {
  const options = {
    method: "GET",
    url: `${apiConstants.baseUrl}/languages`,
    headers: {
      "X-RapidAPI-Key": apiConstants.secretKey,
      "X-RapidAPI-Host": apiConstants.compilerHost,
    },
  };
  try {
    const res = await Axios.default.request(options);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
