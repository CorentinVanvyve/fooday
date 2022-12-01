const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAllUsers);

router.post('/', userController.postUser);

router.put('/', userController.putUser);

module.exports = router;
