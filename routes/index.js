var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.get('/post', function(req, res) {
  res.send('Post');
});

router.get('/logout', function(req, res) {
  res.send('logout');
});

module.exports = router;
