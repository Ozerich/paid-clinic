var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Service', serviceSchema);