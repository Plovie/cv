var app = require('express')()
var express = require('express')
var path = require('path')
var http = require('http').Server(app);
var io = require('socket.io')(http);


module.exports = {

  start : function(port){

  var appDir = path.dirname(require.main.filename);



    app.get('/', (request,response) => {
      response.sendFile(__dirname+'/index.html');
    })
    app.get('/index', (request,response) => {
      response.sendFile(__dirname+'/index.html');
    })

    // var app = module.exports = express();
    //
    // app.use(vhost('*.this-is-my-home.com', main)); // Serves all subdomains via Redirect app
    //
    // /* istanbul ignore next */
    // if (!module.parent) {
    //   app.listen(3000);
    //   console.log('Express started on port 3000');
    // }

  }
}
