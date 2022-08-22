module.exports = (err, req, res) => res.status(err.code || 500).json({
  error: true,
  status: 'error',
  message: err.message || 'Internal Server Error',
});
