var sys = require('util'),

InscriptionError = function(message) {
    this.status = 500;
    this.message = message;
};

sys.inherits(InscriptionError, Error);

module.exports = InscriptionError;
