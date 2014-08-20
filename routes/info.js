var express = require('express');
var router = express.Router();

/* GET info page. */
router.get('/', function(req, res) {
  console.log('get info page');
  res.render('info', { title: 'Jianqing\'s Blog', info: 'This blog is built on Express, based on nodejs'});
});

module.exports = router;
