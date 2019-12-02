const passport = require('passport');

const isLoggedIn = passport.authenticate('jwt', { session: false });
const isAdmin = (req, res, next) => {
  if (!req.user) return res.sendStatus(401);
  if (req.user.role !== 'admin') return res.sendStatus(401);

  return next();
};

module.exports = {
  isLoggedIn,
  isAdmin,
};
