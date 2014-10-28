var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');
var Post = require('../models/post.js');

var sys = require('sys');
var exec = require('child_process').exec;
var util = require('util');
var spawn = require('child_process').spawn;


function output(error, stdout, stderr){
  sys.puts(stdout);
  var result = error;
  result += stdout;
  result += stderr;
  console.log(result);

  if (error !== null) {
    console.log('' + error);
  }
}

function render_result(req, res, result){
  res.render('admin', {
    title: 'Deploy',
    deploy_msg:'Deploy the new code from github:\n' + result,
    user: req.session.user,
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
}

router.get('/deploy', function(req, res) {
  //console.log(result);
  //result = exec('sh `pwd`/tools/deploy.sh', output);

  var result = spawn('sh', ['tools/deploy.sh']);

  result.stdout.on('data', function (data) {    // register one or more handlers
    console.log('stdout: ' + data);
    res.write(data);
    //render_result(req, res, data);
  });

 result.stderr.on('data', function (data) {
   console.log('stderr: ' + data);
    //render_result(req, res, data);
    res.write(data);
 });

  result.on('exit', function (code) {
    console.log('child process exited with code ' + code);
    //render_result(req, res, 'child process exited with code ' + code);
    res.end();
  });
});


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
