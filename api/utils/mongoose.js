var mongoose = require('mongoose');
var config = require('../config.json');

mongoose.connect(config.mongoose.uri);

module.exports = mongoose;