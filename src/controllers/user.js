const User = require('../models/User');

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.fetchAll();
    res.status(200).json(allUsers.rows);
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};
