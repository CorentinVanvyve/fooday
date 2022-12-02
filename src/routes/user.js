const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getOneUser);

router.post('/', userController.postUser);

router.put('/', userController.putUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
