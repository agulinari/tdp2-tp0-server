var dao = require('../dao/WeatherDao');
var utils = require('../utils/Utils');
var jsonValidator = require('../utils/JsonValidator');

exports.getWeather = function (cityID, callback) {
    dao.getWeather(cityID, function (err, response) {
        if (err) {
            callback(err);
            return;
        }
        response.metadata = utils.getMetadata(1);
        callback(null, response);
    });
};

