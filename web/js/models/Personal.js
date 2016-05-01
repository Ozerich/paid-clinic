var BaseModel = require('../utils/BaseModel');

module.exports = BaseModel.extend({
    urlRoot: 'http://localhost:8080/api/personals',
    idAttribute: '_id',
    defaults: {
        name: String.value(null),
        opportunity: String.value(null),
        phone: String.value(null),
        email: String.value(null)
    }
});
 