var service = require('../service/WeatherService');
var errorHandler = require('../utils/ErrorHandler');

//GET - Find Weather by City ID
exports.getWeather = function(req, res) {
    console.log('GET /city/' + req.params.id);
    service.getWeather(req.params.id, function (err, response) {
        if (err) {
            return errorHandler.throwError(res, err);
        }
        return res.json(response);
    });
};


