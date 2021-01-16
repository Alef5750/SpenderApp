const User = require('../models/user')
const user = new User();

const getUsers = async (req, res) => {

}

const addNewUser = async (req, res) => {
  const newUserInfo = req.body;
  const response = await user.addNewUser(newUserInfo);
  console.log(response);
  res.send(response);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
}

const updateUserById = async (req, res) => {
  const { id } = req.params;

}

module.exports = { getUsers, addNewUser, getUserById, updateUserById }; 