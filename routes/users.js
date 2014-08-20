var express = require('express');
var router = express.Router();

/* GET user list . */
router.get('/', function(req, res) {
  res.send('respond with the users info');
});

module.exports = router;
