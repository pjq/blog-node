var mongodb = require('./db');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objectId = schema.ObjectId;

//mongodb.connect(function(err, db){
//});

var userSchema = new schema({
  name:String,
  password:String,
  email:String
});

module.exports = mongoose.model('user', userSchema);
