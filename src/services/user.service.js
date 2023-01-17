const User = require('../models/user');

const getAllUsers = async () => {
  const allUsers = await User.find();

  return allUsers;
}

const getInitials = fullname => {
  const initials = fullname.split(' ')[0][0] + fullname.split(' ')[1][0];

  const result = User.aggregate([
    {
      $project:
      {
        initials: initials
      }
    }
  ]);

  return result._pipeline[0].$project;
}

const getRandomNumbers = count => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }

  const result = User.aggregate([
    {
      $project:
      {
        result: arr.join(', ')
      }
    }
  ]);

  return result._pipeline[0].$project;
}

const createOneUser = async body => {
  const user = new User(body);
  const savedUser = await user.save();

  return savedUser;
}

const deleteOneuser = async id => {
  const deletedUser = await User.findByIdAndDelete(id);

  return deletedUser;
}

const updateUser = async (id, body) => {
  const updatedUser = await User.findByIdAndUpdate(id, body);

  return updatedUser;
}

module.exports = {
  createOneUser,
  getAllUsers,
  getInitials,
  getRandomNumbers,
  deleteOneuser,
  updateUser
};