var express = require("express");
var harp = require("harp");
var app = express();
var router = express.Router();
var data = require(__dirname + '/src/_harp.json');
var helpers = require(__dirname + '/lib/jade-helpers');
var routes = require('./routes');
var errorHandler = require('errorhandler');

// routes
app.set('port', process.env.PORT || 9000);
app.set('views', './src'); // specify the views directory
app.set('view engine', 'jade'); // register the template engine

// routing
app.use(express.static(__dirname + "/src"));
app.use(harp.mount(__dirname + "/src"));
app.use('/', routes);


// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// listen
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});





