const mongoose = require('mongoose')


module.exports = class User {
  constructor() {
    const userSchema = new mongoose.Schema({
      displayName: { type: String, required: true },
      email: { type: String, trim: true, lowercase: true, required: true },
      monthlyIncome: { type: Number, default: 0 },
      monthlyGoal: { type: Number, default: 0 }
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
      console.log(newUser);
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
      const updatedUser = await this.UserModel.findByIdAndUpdate(id, newUserInfo);
      console.log(updatedUser)
      return updatedUser;
    } catch (err) {
      console.log(err.stack);
    }
  }

}