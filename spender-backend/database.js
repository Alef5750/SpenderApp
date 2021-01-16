/*
Data Schemas

user {
  _id: ObjectId,
  displayName: String,
  monthlyIncome: Number,
  monthlyGoal: Number
}

expenses {
  _id: ObjectId,
  userId: ObjectId,
  expenses: [{expense}, {expense}, {expense}]
}

expense {
  _id: ObjectId
  date: Date,
  title: String,
  desc: String,
  category: String
  amount: Number
}
*/

const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const uri = process.env.MONGO_URI;


class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error', err)
      })
  }
}

module.exports = new Database();
