module.exports = (err, req, res, next) => {
  return res.status(err.code || 500).json({
    error: true,
    status: "error",
    message: err.message || "Internal Server Error",
  });
};
