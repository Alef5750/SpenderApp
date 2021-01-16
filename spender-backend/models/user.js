const mongoose = require('mongoose')
const { insertExpense } = require("../utils/helper")



module.exports = class User {
  constructor() {
    const userSchema = new mongoose.Schema({
      displayName: { type: String, required: true },
      email: { type: String, trim: true, lowercase: true, required: true },
      monthlyIncome: { type: Number, default: 0 },
      monthlyGoal: { type: Number, default: 0 },
      expenses: { type: Object, default: {} }
    })

    this.UserModel = mongoose.model('Users', userSchema)
  }

  async findAll() {
    try {
      const usersList = await this.UserModel.find()
      return usersList;
    } catch (err) {
      console.log(err.stack);
    }
  }

  async addNewUser(newUserInfo) {
    try {
      const newUser = await this.UserModel.create(newUserInfo);
      return newUser;
    } catch (err) {
      console.log(err.stack);
    }
  }

  async findById(id) {
    try {
      const user = await this.UserModel.findById(id);
      return user;
    } catch (err) {
      console.log(err.stack);
    }
  }

  async updateById(id, newUserInfo) {
    try {
      const updatedUser = await this.UserModel.findByIdAndUpdate(id, newUserInfo, { returnOriginal: false });
      return updatedUser;
    } catch (err) {
      console.log(err.stack);
    }
  }

  async findAllExpenses(id) {
    try {
      const user = await this.UserModel.findById(id);
      return user.expenses;
    } catch (err) {
      console.log(err.stack);
    }
  }

  async findExpensesByParams(id, query) {
    try {
      const user = await this.UserModel.findById(id);
      // TO DO - FILTER BY QUERY
      return user.expenses;
    } catch (err) {
      console.log(err.stack);
    }
  }

  /*
  HOW SHOULD QUERY LOOK LIKE?
  http://localhost:5000/api/users/:id/expenses?year=2020&month=10-12
  */

  async addNewExpenseById(id, newExpense) {
    try {
      const user = await this.UserModel.findById(id);

      const currentExpenses = user.expenses;
      const newExpenses = insertExpense(newExpense, currentExpenses)

      const updatedUser = await this.UserModel.findByIdAndUpdate(id, { expenses: newExpenses }, { returnOriginal: false });
      return updatedUser.expenses;
    } catch (err) {
      console.log(err.stack);
    }
  }

}