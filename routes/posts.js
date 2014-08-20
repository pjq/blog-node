var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');
var Post = require('../models/post.js');

router.get('/', function(req, res) {
  res.render('post', { 
    title: 'Post' ,
    user: req.session.user,
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
});

router.post('/', function(req, res) {
  var username = req.session.user.name;
  var title = req.body.title;
  var post = req.body.post;
  var date = new Date();

  var newPost = new Post({
    username:username,
    time:date,
    title:title,
    post:post
  });

  newPost.save(function(err, post){
    if(err){
      req.flash('error', err);
      return res.redirect('/');
    }
    req.flash('success', 'Congratulations, your post saved success');
    res.redirect('/');
  });
});

module.exports = router;
