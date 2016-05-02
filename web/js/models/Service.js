var BaseModel = require('../utils/BaseModel');

module.exports = BaseModel.extend({
    urlRoot: 'https://pacific-inlet-79467.herokuapp.com/api/services',
    idAttribute: '_id',
    defaults: {
        name: String.value(null),
        description: String.value(null),
        price: Number.value(0)
    }
});
 