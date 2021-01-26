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
