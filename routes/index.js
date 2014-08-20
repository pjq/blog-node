var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res) {
  var posts = [];
  Post.find({}).sort({_id:-1}).exec(function(err, docs){
    if(err){
      posts = [];
    }

    if('' != docs){
      posts = docs;
    }else{
    }

    res.render('index', { 
      title: 'Jianqing\'s Blog' ,
      posts:posts,
      info:'This is Jianqing\s new Blog, built by Jianqing Peng, base on nodejs + express + mongodb.',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });

});

module.exports = router;
