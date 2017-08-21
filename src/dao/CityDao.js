'use strict';

var City = require('../model/City');

/**
 * Retrieves an List of Subjects
 * @param {Array} list of subject ids.
 * @param {Function} callback  The function to call when retrieval is complete.
 **/
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving city: ' + id);
    //db.collection('cities', function(err, collection) {
      //  collection.findOne({'id':new BSON.ObjectID(id)}, function(err, item) {
      //      res.send(item);
      //  });
    //});
};

exports.getCities = function(req,response) {
      var cityName = req.params.nameCity;
      City.find({"name":cityName}, function (err, values) {
      if (err){
	   return handleError(err);
      }
	   console.log('Retrieving city: ' + values);
	   return response(values);
    }).limit(10);    
};
