var dao = require('../dao/CityDao');
var utils = require('../utils/Utils');
//var BadRequest = require("../error/BadRequest");
//var NotFound = require("../error/NotFound");
var jsonValidator = require('../utils/JsonValidator');

exports.getCities = function (req, callback) {
/*
    if (! utils.isValidPattern(namePattern)) {
        callback(new BadRequest("Invalid City name"));
        return;
    }
*/
    dao.getCities(req, function (err,response) {
       
        if (err) {
            callback(err);
            return;
        }
        response.metadata = utils.getMetadata(response.cities.length);
        callback(null, response);
    });
};

