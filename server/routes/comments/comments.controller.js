const express  = require('express');
const router   = express.Router();
const Reply = require('../../models/Reply');
const Thread = require('../../models/Thread');

router.get('/', (req, res, next) => {
    Thread
      .find({})
      .populate('_author replies._author')
      .exec( (err, comments) => {
        if (err) { return res.status(500).json(err); }
  
        return res.status(200).json(comments);
      });
  });

  router.get('/:id', (req, res, next) => {
    Thread
      .findById(req.params.id)
      .populate('_author replies._author')
      .exec( (err, thread) => {
        if (err)     { return res.status(500).json(err); }
        if (!thread) { return res.status(404).json(err); }
  
        return res.status(200).json(thread);
      });
  });

  
  
  module.exports = router;
  