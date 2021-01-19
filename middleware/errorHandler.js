const errorHandler = function (err, req, res, next) {
  console.log('error handler:', err);

  res.status(500);
  res.json({ errors: [err.message] });
};

module.exports = errorHandler;
