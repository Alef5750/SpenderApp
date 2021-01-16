const User = require('../models/user')
const user = new User();

const getUsers = async (req, res) => {
  const users = await user.findAll();
  res.send(users);
}

const addNewUser = async (req, res) => {
  const newUserInfo = req.body;
  const newUser = await user.addNewUser(newUserInfo);
  res.send(newUser);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  const foundUser = await user.findById(id);
  res.send(foundUser);
}

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const newUserInfo = req.body;
  const updatedUser = await user.updateById(id, newUserInfo);
  res.send(updatedUser);
}

module.exports = { getUsers, addNewUser, getUserById, updateUserById }; 