const { validationResult } = require('express-validator');
const {
  createOneUser,
  getAllUsers,
} = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).send(users);
  } catch (error) {
    res.status(404).send('Failed to find tasks');
  }
}

const postUser = async (req, res) => {
  try {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const expense = await createOneUser(req.body);

    res.status(201).send(expense);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  postUser,
  getUsers
};