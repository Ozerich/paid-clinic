var DataPoint = {
    _add: function (name, data) {
        var models = localStorage.getItem(name);
        if (models == null) {
            models = {};
        }
        else {
            models = JSON.parse(models);
        }

        if ('id' in data === false) {
            data.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        }

        models[data.id] = data;

        localStorage.setItem(name, JSON.stringify(models));
    },

    _update: function (name, id, data) {
        var items = localStorage.getItem(name);
        items = items ? JSON.parse(items) : {};

        if (id in items === false) {
            return;
        }

        data.id = id;
        items[id] = data;

        localStorage.setItem(name, JSON.stringify(items));
    },

    _get: function (name) {
        var items = localStorage.getItem(name);

        items = items ? JSON.parse(items) : {};

        var result = [];
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                result.push(items[i]);
            }
        }

        return result;
    },

    _delete: function (name, id) {
        var items = localStorage.getItem(name);
        items = items ? JSON.parse(items) : {};

        delete items[id];

        localStorage.setItem(name, JSON.stringify(items));
    }
};

function createService(name) {
    return {
        add: function (model) {
            return DataPoint._add(name, model);
        },
        get: function () {
            return DataPoint._get(name);
        },
        update: function (id, model) {
            return DataPoint._update(name, id, model);
        },
        delete: function (id) {
            return DataPoint._delete(name, id);
        }
    }
}

DataPoint.Services = createService('services');
DataPoint.Personal = createService('personal');
DataPoint.Customers = createService('customers');

module.exports = DataPoint;