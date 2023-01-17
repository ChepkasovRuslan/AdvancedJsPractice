const express = require("express");
const { userValidation } = require('../middlewares/user.validation');

const router = express.Router();

const {
  postUser,
  getUsers,
  getUsersInitials,
  getRandom
} = require('../controllers/user.controller');

// Создать роут для сохранения пользователя в БД.
router.post('/users', userValidation, postUser);
router.get('/users', getUsers);
// Создать роут, который получит fullName пользователя и вернет только его инициалы, например: fullName: Denis Petrov => result: DP
router.get('/users/initials/:fullName', getUsersInitials);
router.get('/users/random/:count', getRandom);

module.exports = router;