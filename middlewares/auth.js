const { validateToken } = require("../config/token");

function validateUser(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    const { payload } = validateToken(token);

    req.user = payload;

    if (payload) return next();
  }
  res.sendStatus(401);
}
function validateAdmin(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    const { payload } = validateToken(token);

    if (payload.is_admin === true) return next();
  }
  res.status(401).json("error: you need credentials to access");
}
function validateCredentials(req, res, next) {
  const token = req.cookies.token;

  if (token) {
    const { payload } = validateToken(token);

    if (payload.id === req.params.id) return next();
  }
  res.status(401).json("error: you need credentials to access");
}

module.exports = { validateUser, validateAdmin, validateCredentials };
