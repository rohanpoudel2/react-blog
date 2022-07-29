const router = require('express').Router();
const Cat = require('../models/Category');

router.post('/', async (req, res) => {
  const newCat = new Cat(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json({
      success: true,
      msg: saveCat
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const newCat = await Cat.find();
    res.status(200).json({
      success: true,
      msg: newCat
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error
    });
  }
});

module.exports = router;