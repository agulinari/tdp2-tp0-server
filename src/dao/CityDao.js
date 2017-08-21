var path = require('path');
var pg = require('pg');
var dbConnection = require(path.join(__dirname, '../', 'config'));

/**
 * Retrieves an List of Subjects
 * @param {Array} list of subject ids.
 * @param {Function} callback  The function to call when retrieval is complete.
 **/
exports.getCities = function (namePattern, callback) {
    var results = [];
    
    /*
    // Get a Postgres client from the connection pool
    pg.connect(dbConnection, function (err, client, done) {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            callback(err);
            return;
        }

        // SQL Query > Select Data
        var query = client.query(
            "SELECT id, code, name FROM subject WHERE id in (" + subjects.join(", ") + ") ORDER BY code ASC"
        );

        // Stream results back one row at a time
        query.on('row', function (row) {
            var subject = {
                'subject': {
                    'id': row.id,
                    'code': row.code,
                    'name': row.name
                }
            }
            results.push(subject);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            done();
            var response = {
                "subjects": results
            }
            callback(null, response);
        });
    });
    */
};

