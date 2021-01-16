const { isEmpty } = require("../utils/helper")
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

const getExpensesById = async (req, res) => {
  const { id } = req.params;
  const queryParams = req.query;
  const expenses = isEmpty(queryParams) ? await user.findAllExpenses() : await user.findExpensesByParams(queryParams)
  res.send(expenses);
}

const addNewExpenseById = async (req, res) => {
  const { id } = req.params;
  const newExpense = req.body;
  const expenses = user.addNewExpenseById(id, newExpense)
  res.send(expenses);
}

module.exports = { getUsers, addNewUser, getUserById, updateUserById, getExpensesById, addNewExpenseById }; 