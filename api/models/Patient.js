var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;

var patientsSchema = new Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Patient', patientsSchema);