var dao = require('../dao/CityDao');
var utils = require('../utils/Utils');
//var BadRequest = require("../error/BadRequest");
//var NotFound = require("../error/NotFound");
var jsonValidator = require('../utils/JsonValidator');

exports.getCities = function (term,offset,count, callback) {
/*
    if (! utils.isValidPattern(namePattern)) {
        callback(new BadRequest("Invalid City name"));
        return;
    }
*/
    dao.getCities(term,offset,count, function (err,response) {
       
        if (err) {
            console.log('hay error');
	    callback(err);
            return;
        }
        response.metadata = utils.getMetadata(response.length);
        callback(null, response);
    });
};

