var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');

router.get('/', function(req, res) {
  console.log('register page!!!');
  res.render('reg', { title: 'Register' });
});

router.post('/', function(req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var password_re = req.body['password-repeat'];
  var email = req.body.email;
  console.log("register received");

  if (password_re != password){
    req.flash('error', "password not match");
    return res.redirect('/reg');
  }

  var md5 = crypto.createHash('md5');
  password = md5.update(password).digest('hex');
  var newUser = new User({
    name:name,
    password:password,
    email:email
  });

  User.find({name:name}, function(err, docs){
    if(err){
      req.flash('error', err);
      return res.redirect('/reg');
    }

    console.log('find the exist users:\n' + docs);
    if('' != docs){
      console.log(name + ' already exist');
      req.flash('error', name + ' user already exist');
      return res.redirect('/reg');
    }else{
      newUser.save(function(err, user){
        if(err){
          req.flash('error', err);
          return res.redirect('/reg');
        }

        req.session.user = user;
        req.flash('success', 'register success');
        res.redirect('/');
      });
    }


  });

});

module.exports = router;
