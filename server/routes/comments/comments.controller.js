const express  = require('express');
const router   = express.Router();
const Reply = require('../../models/Reply');
const Thread = require('../../models/Thread');

//CRUD

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
      .exec( (err, comment) => {
        if (err)     { return res.status(500).json(err); }
        if (!comment) { return res.status(404).json(err); }
  
        return res.status(200).json(comment);
      });
  });

  router.post('/new', (req, res, next) => {
    const newThread = new Thread({
      _author: req.user._id,
      title: req.body.title,
      content: req.body.content
    });

    newThread.save((err) => {
      if (err)              { return res.status(500).json(err); }
      if (newThread.errors) { return res.status(400).json(newThread); }
      return res.status(200).json(newThread); 
    });


    router.delete("/:id", (req,res, next)=>{
      Thread.findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: `MESSAGE DELETED ${req.params.id}`}))
      .catch(error => next(error));
    });
  });

  router.post('/:id/replies',  (req, res, next) => {
    const newReply = new Reply({
      _author: req.user._id,
      title: req.body.title,
      content: req.body.content
    });
  
    Thread
      .findById(req.params.id)
      .populate('_author replies._author')
      .exec((err, comment) => {
        if (err)     { return res.status(500).json(err); }
        if (!comment) { return res.status(404).json(err); }
  
        comment.replies.push(newReply);
  
        comment.save( (err) => {
          if (err)          { return res.status(500).json(err); }
          if (comment.errors){ return res.status(400).json(comment); }
  
          return res.status(200).json(comment);
        });
    });
  });
  


  module.exports = router;
  