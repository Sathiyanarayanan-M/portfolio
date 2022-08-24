// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => res.status(err.code || 500).json({
  error: true,
  status: 'error',
  message: err.message || 'Internal Server Error',
});
