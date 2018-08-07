const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

const commentRoutes = require('./comments/comments.controller');
router.use('/comments', commentRoutes);

module.exports = router;
