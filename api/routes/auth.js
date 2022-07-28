const router = require('express').Router();

const Users = require('../models/Users');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
})
//Login
router.post('/login', async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });

    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!user || !validated) {
      res.status(400).json({
        success: false,
        msg: 'Wrong Credentials!!!'
      });
    } else {
      const { password, ...others } = user._doc;
      res.status(200).json({
        success: true,
        data: others
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;