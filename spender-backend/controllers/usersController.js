const User = require('../models/user')
const user = new User();

const getUsers = async (req, res) => {

}

const addNewUser = async (req, res) => {

}

const getUserById = async (req, res) => {
  const { id } = req.params;

}

const updateUserById = async (req, res) => {
  const { id } = req.params;

}

module.exports = { getUsers, addNewUser, getUserById, updateUserById }; 