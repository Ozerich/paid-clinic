var BaseModel = require('../utils/BaseModel');

module.exports = BaseModel.extend({
    urlRoot: 'http://localhost:8080/api/services',
    idAttribute: '_id',
    defaults: {
        name: String.value(null),
        description: String.value(null),
        price: Number.value(0)
    }
});
 