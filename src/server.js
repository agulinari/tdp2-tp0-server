//Module dependencies
var express = require("express");
var bodyParser = require("body-parser");
var url = require('url');
var app = express();

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

//Cities routing
app.get('/cities', function (req, res, next) {
    cityCtrl.getCities(req, res);
});
 
//Weather routing
app.get('/city/:id', function (req, res, next) {
    weatherCtrl.getWeather(req, res);
});

app.all('*', function (req,res,next) {
    console.log('NOPE');
    return res.sendStatus(401);
    next();
});

// Start server
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

module.exports = app; // for testing
