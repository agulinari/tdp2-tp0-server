require('./db');

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;



/**
 * City Schema
 

"id": 707860,
    "name": "Hurzuf",
    "country": "UA",
    "coord": {
      "lon": 34.283333,
      "lat": 44.549999
    }
*/
const CitySchema = new Schema({
  id: Number,
  name: String,
  country: String,
  coord: [{
    lon: { type : Number },
    lat: { type : Number }
  }],
},{ collection: 'cities' });

// make this available to our users in our Node applications
module.exports = mongoose.model("City", CitySchema);
