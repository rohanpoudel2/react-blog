const router = require('express').Router();
const Users = require('../models/Users');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//Update
router.patch('/:id', async (req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, {
        new: true
      })
      await Post.updateMany({ username: updatedUser.username })
      res.status(200).json({
        success: true,
        msg: updatedUser
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error
      });
    }
  } else {
    res.status(401).json({
      success: false,
      msg: 'You can update only your account'
    });
  }
});
//Delete
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await Users.findById(req.params.id);
      if (user) {
        await Post.deleteMany({ username: user.username });
      }
      try {
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, msg: 'User has been deleted' })
      } catch (error) {
        res.status(500).json({
          success: false,
          msg: error
        });
      }
    } catch (error) {
      res.status(404).json({
        success: false,
        msg: "User not found ..."
      });
    }
  } else {
    res.status(401).json({
      success: false,
      msg: 'You can delete only your account'
    });
  }
});

//Get User
router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json({
      success: true,
      msg: others
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

module.exports = router;