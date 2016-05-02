var BaseModel = require('../utils/BaseModel');

module.exports = BaseModel.extend({
    urlRoot: 'https://pacific-inlet-79467.herokuapp.com/api/patients',
    idAttribute: '_id',
    defaults: {
        name: String.value(null),
        phone: String.value(null),
        email: String.value(null)
    }
});
 