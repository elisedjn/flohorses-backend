const express = require('express');
const router = express.Router();

const uploader = require('../config/cloudinary.config.js');

router.post('', uploader.single("imageUrl"), (req, res, next) => {
  console.log('file is:', req.file)
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  res.json({ image: req.file.path });
})

module.exports = router ;