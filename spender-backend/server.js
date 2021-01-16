const express = require('express');
const mongoClient = require('./database')
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const cors = require('cors')

// set cors
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes
const usersRouter = require('./routes/usersRouter')
// const expensesRouter = require('./routes/expensesRouter')

app.use('/api/users', usersRouter);
// app.use('/api/expenses', expensesRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// handle termination on ctrl+c to close mongo connection
process.on('SIGINT', () => {
  console.info('SIGTERM signal received.');
  mongoose.connection.close(false, () => {
    console.log('MongoDb connection closed.');
    process.exit(0);
  });
});