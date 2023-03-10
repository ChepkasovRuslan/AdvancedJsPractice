const { validationResult } = require('express-validator');
const {
  createOneUser,
  getAllUsers,
  getInitials,
  getRandomNumbers,
  deleteOneuser,
  updateUser
} = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).send(users);
  } catch (error) {
    res.status(404).send('Failed to find tasks');
  }
}

const getUsersInitials = (req, res) => {
  try {
    const initials = getInitials(req.params.fullName);

    res.status(200).send(initials);
  } catch (error) {
    res.status(500).send('Failed to get initials');
  }
}

const getRandom = (req, res) => {
  try {
    const random = getRandomNumbers(req.params.count);

    res.status(200).send(random);
  } catch (error) {
    res.status(500).send('Failed to get random numbers');
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

const deleteUser = async (req, res) => {
  try {
    const result = await deleteOneuser(req.params.id);

    res.status(202).send(result);
  } catch (error) {
    res.status(404).send('User to delete not found');
  }
}

const patchUser = async (req, res) => {
  try {
    const result = await updateUser(req.params.id, req.body);

    res.status(202).send(result);
  } catch (error) {
    res.status(404).send('User to update not found');
  }
}

module.exports = {
  postUser,
  getUsers,
  getUsersInitials,
  getRandom,
  deleteUser,
  patchUser
};