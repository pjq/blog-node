var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');

router.get('/', function(req, res) {
  req.session.user = null;
  req.flash('success', 'Logout success');
  res.redirect('/');
});

module.exports = router;
