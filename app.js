
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var markdown = require( "markdown" ).markdown;
var request = require("request");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
    /*request('https://api.github.com/repos/cacauu/librejo/releases?limit=1', function(error, response, body) {
        console.log(body);
        var JSONBody = JSON.parse(body);
        console.log(JSONBody);
        console.log(JSONBody[0].name +' - '+JSONBody[0].url);
    });*/
	res.render('index', 
	{
		title: 'Librejo',
	});
});
app.get('/documentation', function(req, res) {
	res.render('docs',
	{
		
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port')); //Debug statement
});
