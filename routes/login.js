var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');

router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res) {
  var name = req.body.name;
  var password = req.body.password;

  var md5 = crypto.createHash('md5');
  password = md5.update(password).digest('hex');

  User.find({name:name, password:password}, function(err, docs){
    if(err){
      req.flash('error', err);
      return res.redirect('/login');
    }

    console.log('find the exist users:\n' + docs);
    if('' != docs){
      console.log(name + ' login success');
      req.flash('success', name + ' login success');
      return res.redirect('/');
    }else{
        req.flash('error', 'login failed');
        res.redirect('/login');
    }
  });

});

module.exports = router;
