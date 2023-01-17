const express = require("express");
const { userValidation } = require('../middlewares/user.validation');

const router = express.Router();

const {
  postUser,
  getUsers
} = require('../controllers/user.controller');

// Создать роут для сохранения пользователя в БД.
router.post('/users', userValidation, postUser);
router.get('/users', getUsers);

module.exports = router;