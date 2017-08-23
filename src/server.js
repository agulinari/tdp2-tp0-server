//Module dependencies
var express = require("express");
var bodyParser = require("body-parser");
var url = require('url');
var app = express();

app.use(express.static(process.cwd() + '/public'));

// redirect bootstrap JS
app.use('/js', express.static(process.cwd() + '/node_modules/bootstrap/dist/js'));

// redirect CSS bootstrap
app.use('/css', express.static(process.cwd() + '/node_modules/bootstrap/dist/css'));

app.use(bodyParser.json({
	limit: '50mb'
}));
app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));

app.set('port', (process.env.PORT || 3000));

var cityCtrl = require(process.cwd() + '/src/controllers/CityController');
var weatherCtrl = require(process.cwd() + '/src/controllers/WeatherController');



// Start server
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

