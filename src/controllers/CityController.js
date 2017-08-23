var service = require('../service/CityService');
var errorHandler = require('../utils/ErrorHandler');


//GET - Return all Cities by name pattern
exports.getCities = function (req, res) {
    console.log('GET /cities');
    var term = req.query.term ? req.query.term : "";
    var offset = req.query.offset ? parseInt(req.query.offset) : 0;
    var count = req.query.count ? parseInt(req.query.count) : 50;

    service.getCities(term,offset,count, function (err, response) {
        if (err) {
            return errorHandler.throwError(res, err);
        }
        return res.json(response);
    });
};



