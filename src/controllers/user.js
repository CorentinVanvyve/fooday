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

exports.getOneUser = async (req, res, next) => {
  try {
    const oneUser = await User.fetchOne(req.params.id);
    res.status(200).json(oneUser.rows);
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const postResponse = await User.post(req.body.phone);
    res.status(201).json(postResponse);
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};

exports.putUser = async (req, res, next) => {
  try {
    const putResponse = await User.update(req.body.id, req.body.phone);
    res.status(201).json(putResponse);
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const deleteResponse = await User.delete(req.params.id);
    res.status(201).json(deleteResponse);
  } catch (e) {
    if (!e.statusCode) {
      e.statusCode = 500;
    }
    next(e);
  }
};
