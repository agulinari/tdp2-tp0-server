exports = mongoose = require('mongoose');
var connectionUri = "mongodb://127.0.0.1/dbtp0";
mongoose.connect(connectionUri,{ useMongoClient: true });
exports = Schema = mongoose.Schema;
