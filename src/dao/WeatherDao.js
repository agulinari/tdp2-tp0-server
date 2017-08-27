var ServiceUnavailable = require("../error/ServiceUnavailable");
var NotFound = require("../error/NotFound");
var InvalidKey = require("../error/InvalidKey");
var Client = require('node-rest-client').Client;
var client = new Client();

var geoTz = require('geo-tz');

var key = 'd035923511c854c5e1b18ae6545be578';
var units = 'metric';
client.registerMethod("getWeather", "http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${key}&units=${units}", "GET");

var weatherMap = {'200':'rainy','201':'rainy','202':'rainy','210':'rainy','211':'rainy','212':'rainy','221':'rainy','230':'rainy','231':'rainy','232':'rainy','300':'rainy','301':'rainy','302':'rainy','310':'rainy','311':'rainy','312':'rainy','313':'rainy','314':'rainy','321':'rainy','500':'rainy','501':'rainy','502':'rainy','503':'rainy','504':'rainy','511':'rainy','520':'rainy','521':'rainy','522':'rainy','531':'rainy','600':'rainy','601':'rainy','602':'rainy','611':'rainy','612':'rainy','615':'rainy','616':'rainy','620':'rainy','621':'rainy','622':'rainy','701':'cloudy','711':'cloudy','721':'cloudy','731':'cloudy','741':'cloudy','751':'cloudy','761':'cloudy','762':'cloudy','771':'cloudy','781':'cloudy','800':'sunny','801':'sunny','802':'sunny','803':'cloudy','804':'cloudy','900':'rainy','901':'rainy','902':'rainy','903':'rainy','904':'sunny','905':'cloudy','906':'rainy','951':'sunny','952':'sunny','953':'sunny','954':'cloudy','955':'sunny','956':'cloudy','957':'cloudy','958':'cloudy','959':'rainy','960':'rainy','961':'rainy','962':'rainy'};

/**
 * Get Weather data by city ID
 * @param {String} cityID  City ID.
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
        if (response.statusCode != 200) {
            //console.error('error: ' + data.cod + '\nmsg: ' + data.message);
            var err = null;
            if (data.cod == 404) {
                err = new NotFound("City not found");
            } else if (data.cod == 401) {
                err = new InvalidKey("Service temporaly unavailable");
            } else {
                err = new ServiceUnavailable("Service temporaly unavailable");
            }
            callback(err, null);
            return;
        } else if (data.coord.lat == 0 && data.coord.lon == 0) {
            callback(new NotFound("City not found"), null);
            return;
        }
        res.data.pressure = data.main.pressure;
        res.data.temperature = data.main.temp;
        var idWeather = data.weather[0].id;
        res.data.weather = (idWeather in weatherMap) ? weatherMap[idWeather] : 'sunny';
        var time = geoTz.tzMoment(data.coord.lat, data.coord.lon);
        res.data.time = (time != null) ? time.format() : "";
        //console.log(res);
        callback(null, res);
    }).on('error', function (err) {
        //console.error('Something went wrong on the client', err);
        callback(new ServiceUnavailable("Service temporaly unavailable"), null);
    });
};

