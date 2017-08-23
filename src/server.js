//Module dependencies
var express = require("express");
var bodyParser = require("body-parser");
var url = require('url');
var http = require('http'); //para heroku
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

app.get('/', function (req, res, next) {
	res.render('index');
});


//Cities routing
app.get('/cities', function (req, res, next) {
       
	cityCtrl.getCities(req, res);
});

//Weather routing
app.get('/city/:id', function (req, res, next) {
	weatherCtrl.getWeather(req, res);
});

// Start server local
//app.listen(app.get('port'), function() {
//	console.log('Node app is running on port', app.get('port'));
//});

//Start server in heroku
http.createServer(function(request,response){
	console.log('Node app is running on port', app.get('port'));      
}).listen(app.get('port'))
