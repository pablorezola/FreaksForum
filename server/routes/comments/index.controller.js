const express = require('express');
const router  = express.Router();

const commentRoutes = require('./comments.controller');
router.use('/threads', commentRoutes);

module.exports = router;