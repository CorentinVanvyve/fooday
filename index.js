const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT
const userRoutes = require('./src/routes/user');
const errorController = require('./src/controllers/error');

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use(bodyParser.json());

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/users', userRoutes);

app.use(errorController.get404);
app.use(errorController.get500);
