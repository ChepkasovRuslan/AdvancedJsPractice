const User = require('../models/user');

const getAllUsers = async () => {
  const allUsers = await User.find();

  return allUsers;
}

const createOneUser = async body => {
  const user = new User(body);
  const savedUser = await user.save();

  return savedUser;
}

module.exports = {
  createOneUser,
  getAllUsers
};