var mongodb = require('./db');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objectId = schema.ObjectId;

//mongodb.connect(function(err, db){
//});

var postSchema = new schema({
  username:String,
  time:String,
  title:String,
  post:String
});

module.exports = mongoose.model('post', postSchema);
