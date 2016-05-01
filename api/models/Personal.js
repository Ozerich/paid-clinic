var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;

var personalSchema = new Schema({
    name: String,
    opportunity: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Personal', personalSchema);