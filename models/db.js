var settings = require('../settings');

var mongodb = require('mongodb');
var mongoose = require('mongoose');
//var Db = mongodb.Db;
var Connection = mongodb.Connection;
//var Server = mongodb.Server;

//module.export = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe: true});
//module.export=mongodb;

//mongodb.connect=function(callback){
  mongoose.connect('mongodb://' + settings.host + ':' + Connection.DEFAULT_PORT + '/' + settings.db);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
//  db.once('open', function callback(){
//    console.log('db open');
//    callback();
//  });
//};
