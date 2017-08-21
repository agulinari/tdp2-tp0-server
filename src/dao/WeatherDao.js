var Client = require('node-rest-client').Client;
var client = new Client();

var geoTz = require('geo-tz');

var key = 'd035923511c854c5e1b18ae6545be578';
var units = 'metric';
//var id = '2172797';
client.registerMethod("getWeather", "http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${key}&units=${units}", "GET");

/**
 * Get a Course by ID
 * @param {String} courseID  Course ID.
 * @param {Function} callback  The function to call when retrieval is complete.
 */
exports.getWeather = function (cityID, callback) {
    var res = {
        data: {
            pressure: '',
            temperature: '',
            weather: '',
            time:'',
        }
    };
    
    var args = {
        path: {
            "id": cityID ,
            "key" : key,
            "units": units
        }
    };

    client.methods.getWeather(args, function (data, response) {
        //console.log(data);    // parsed response body as js object 
        //console.log(response);// raw response
        res.data.pressure = data.main.pressure;
        res.data.temperature = data.main.temp;
        res.data.weather = data.weather[0].main;
        res.data.time = geoTz.tzMoment(data.coord.lat, data.coord.lon).format();
        console.log(res);
        var now = geoTz.tzMoment(data.coord.lat, data.coord.lon);
        console.log(now);
        callback(null, res);
    }).on('error', function (err) {
        console.error('Something went wrong on the client', err);
        callback(err, null);
    });
};

