/*
Data Schemas

user {
  _id: ObjectId,
  firstName: String,
  lastName: String,
  monthlyIncome: Number,
  monthlyGoal: Number
  expenses: [{expense}, {expense}, {expense}]
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

const { MongoClient } = require('mongodb')
require('dotenv').config({ path: './.env' });

const uri = process.env.MONGO_URI;

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error', err)
      })
  }
}

module.exports = new Database();