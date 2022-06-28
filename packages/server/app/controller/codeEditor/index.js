const compiler = require("../../utils/api/ideAPIs");
exports.codeCompiler = async (req, res, next) => {
  const { submitCode } = compiler;
  try {
    const compilerRes = await submitCode(req.body);
    return res.status(200).json({
      error: false,
      status: "success",
      compilerRes,
    });
  } catch (e) {
    return next(e);
  }
};

exports.getAllLanguages = async (req, res, next) => {
  const { getLanguages } = compiler;

  try {
    const languages = await getLanguages();
    return res.status(200).json({
      error: false,
      status: "success",
      languages: languages,
    });
  } catch (e) {
    return next(e);
  }
};
