const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/posts', postRoute);

app.listen('3001', () => {
  console.log("Server is listening on 3001...");
})