var app = require('express')()
var express = require('express')
var path = require('path')
var http = require('http').Server(app);
var io = require('socket.io')(http);


module.exports = {

  start : function(port){

  var appDir = path.dirname(require.main.filename);


    app.set("view engine", "ejs");
    app.set('views', appDir);


    app.get('/', (request,response) => {
      response.sendFile(__dirname+'/index.html');
    })
    app.get('/index', (request,response) => {
      response.sendFile(__dirname+'/index.html');
    })



}
