const express = require("express");
const { userValidation } = require('../middlewares/user.validation');

const router = express.Router();

const {
  postUser,
  getUsers,
  getUsersInitials,
  getRandom,
  deleteUser
} = require('../controllers/user.controller');

// Создать роут для сохранения пользователя в БД.
router.post('/users', userValidation, postUser);
router.get('/users', getUsers);
// Создать роут, который получит fullName пользователя и вернет только его инициалы, например: fullName: Denis Petrov => result: DP
router.get('/users/initials/:fullName', getUsersInitials);
// Создать роут, который получит количество нужных значений и вернет массив рандомных числовых значений в любом диапазоне.Например, count: 3 => result: [9, 546, 73]
router.get('/users/random/:count', getRandom);
// Создать роут на удаление пользователя из БД.
router.delete('/users/:id', deleteUser);

module.exports = router;