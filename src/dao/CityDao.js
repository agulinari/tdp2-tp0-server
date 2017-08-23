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

exports.getCities = function(term,offset,count,callback) {
      console.log("offset " + offset);
      console.log("count " + count);
      City.find({"name":{ "$regex": "^" + term, "$options": "i" }},function (err, values) {
      if (err){
           console.log('Error: ' + err);
	   callback(err,null);
      }
//	   console.log('Retrieving city: ' + values);
	callback(null, values);
    }).sort('name').skip(offset).limit(count);    
	
//      response.status(200);
};
