const mongoose = require('mongoose')
const { insertExpense, getExpensesByQuery } = require("../utils/helper")

module.exports = class User {
  constructor() {
    const userSchema = new mongoose.Schema({
      googleId: { type: Number, required: true },
      displayName: { type: String, required: true },
      // email: { type: String, trim: true, lowercase: true, required: true },
      monthlyIncome: { type: Number, default: 0 },
      monthlyGoal: { type: Number, default: 0 },
      expenses: { type: Object, default: {} }
    })

    this.UserModel = mongoose.model('Users', userSchema)
  }

  async findAll() {
    try {
      const usersList = await this.UserModel.find().select('-expenses')
      return usersList;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

  async addNewUser(newUserInfo) {
    try {
      const newUser = await this.UserModel.create(newUserInfo);
      return newUser;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

  async findOrAdd(searchParam, userInfo) {
    try {
      let user = await this.UserModel.findOne(searchParam).exec();
      if (!user)
        user = await this.addNewUser(userInfo);
      return user;
    } catch (err) {
      console.log(err.stack);
      return err;
    }
  }

  async findById(id) {
    try {
      const user = await this.UserModel.findById(id).select('-expenses');
      return user;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

  async updateById(id, newUserInfo) {
    try {
      const updatedUser = await this.UserModel.findByIdAndUpdate(id, newUserInfo, { returnOriginal: false });
      return updatedUser;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

  async findAllExpenses(id) {
    try {
      const user = await this.UserModel.findById(id);
      return user.expenses;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

  async findExpensesByParams(id, query) {
    try {
      const user = await this.UserModel.findById(id);

      const userExpenses = user.expenses;
      const filteredExpenses = getExpensesByQuery(userExpenses, query);
      return filteredExpenses;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

  async addNewExpenseById(id, newExpense) {
    try {
      const user = await this.UserModel.findById(id);

      const currentExpenses = user.expenses;
      const newExpenses = insertExpense(newExpense, currentExpenses)

      const updatedUser = await this.UserModel.findByIdAndUpdate(id, { expenses: newExpenses }, { returnOriginal: false });
      return updatedUser.expenses;
    } catch (err) {
      console.log(err.stack);
      return false;
    }
  }

}