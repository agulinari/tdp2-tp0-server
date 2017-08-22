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
      var term = req.query.term ? req.query.term : "";
      var offset = req.query.offset ? parseInt(req.query.offset) : 0;
      var count = req.query.count ? parseInt(req.query.count) : 50;
      console.log("offset " + offset);
      console.log("count " + count);
      City.find({"name":{ "$regex": "^" + term, "$options": "i" }}, function (err, values) {
      if (err){
         console.log('Error: ' + err);
	   return handleError(err);
      }
	   console.log('Retrieving city: ' + values);
	   return response(values);
    }).sort('name').skip(offset).limit(count);    
};
