const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const catRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');

dotenv.config();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

app.post('/api/v1/upload', upload.single("file"), (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'File has been uploaded'
  });
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/categories', catRoute);

app.listen('3001', () => {
  console.log("Server is listening on 3001...");
})