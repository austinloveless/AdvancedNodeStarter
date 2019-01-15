const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // lets the route handler do everything
  // then it comes back around to clear this.
  await next();

  clearHash(req.user.id);
};
