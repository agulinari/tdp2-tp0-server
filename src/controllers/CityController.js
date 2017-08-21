var service = require('../service/CityService');
var errorHandler = require('../utils/ErrorHandler');


//GET - Return all Cities by name pattern
exports.getCities = function (req, res) {
    console.log('GET /cities');
    service.getCities(req.params.namePattern, function (err, response) {
        if (err) {
            return errorHandler.throwError(res, err);
        }
        return res.json(response);
    });
};



