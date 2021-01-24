const { isEmpty, authRequest } = require("../utils/helper")
const User = require('../models/user');
const user = new User();

const getUsers = async (req, res) => {
  const users = await user.findAll();
  if (users) res.status(200).send(users)
  else res.status(400).send("Users not found")
}

const addNewUser = async (req, res) => {
  const newUserInfo = req.body;
  const newUser = await user.addNewUser(newUserInfo);
  if (newUser) res.status(200).send(newUser)
  else res.status(400).send("User could not be added")
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  const authCheck = authRequest(req.user, id)
  if (!authCheck) res.status(401).send("Unauthorized")
  else {
    const foundUser = await user.findById(id);
    if (foundUser) res.status(200).send(foundUser)
    else res.status(400).send("User could not be found")
  }
}

const updateUserById = async (req, res) => {
  const { id } = req.params;

  const authCheck = authRequest(req.user, id)
  if (!authCheck) res.status(401).send("Unauthorized")
  else {
    const newUserInfo = req.body;
    const updatedUser = await user.updateById(id, newUserInfo);
    if (updatedUser) res.status(200).send(updatedUser)
    else res.status(400).send("User could not be updated")
  }
}

const getExpensesById = async (req, res) => {
  const { id } = req.params;

  const authCheck = authRequest(req.user, id)
  if (!authCheck) res.status(401).send("Unauthorized")
  else {
    const queryParams = req.query;
    const expenses = isEmpty(queryParams) ? await user.findAllExpenses(id) : await user.findExpensesByParams(id, queryParams)
    if (expenses) res.status(200).send(expenses)
    else res.status(400).send("Could not get user expenses")
  }
}

const addNewExpenseById = async (req, res) => {
  const { id } = req.params;
  const authCheck = authRequest(req.user, id)
  if (!authCheck) res.status(401).send("Unauthorized")
  else {
    const newExpense = req.body;
    const expenses = await user.addNewExpenseById(id, newExpense)
    if (expenses) res.status(200).send(expenses)
    else res.status(400).send("Could not add to user expenses")
  }
}

module.exports = { getUsers, addNewUser, getUserById, updateUserById, getExpensesById, addNewExpenseById, user }; 