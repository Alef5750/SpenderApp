const express = require('express');
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


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// handle termination on ctrl+c to close mongo connection
process.on('SIGINT', () => {
  console.info('SIGTERM signal received.');
  mongoClient.close(false, () => {
    console.log('MongoDb connection closed.');
    process.exit(0);
  });
});