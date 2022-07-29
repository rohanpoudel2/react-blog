const router = require('express').Router();
const Post = require('../models/Post');

//Create Post
router.post('/', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json({
      success: true,
      msg: savedPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

//Update Post
router.patch('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        }, { new: true });
        res.status(200).json({
          success: true,
          msg: updatedPost
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
        msg: 'Cannot update others Posts...'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

//Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json({
          success: true,
          msg: 'Post Deleted Successfully'
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
        msg: 'Cannot Delete other users Posts...'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }

});

//Get Post

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      success: true,
      msg: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

//Get All Posts

router.get('/', async (req, res) => {
  const username = req.query.user;
  const cat = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (cat) {
      posts = await Post.find({
        categories: {
          $in: [cat]
        }
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({
      success: true,
      msg: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

module.exports = router;