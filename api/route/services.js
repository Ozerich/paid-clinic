var express = require('express');
var Service = require('../models/Service');

var router = express.Router();

router.route('/services').post(function (req, res) {
    var service = new Service();

    service.name = req.body.name;
    service.description = req.body.description;
    service.price = req.body.price;

    service.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json({message: 'Service created!'});
    });
}).get(function (req, res) {
    Service.find(function (err, services) {
        if (err) {
            res.send(err);
        }

        res.json(services);
    });
});

router.route('/services/:service_id')
    .get(function (req, res) {
        Service.findById(req.params.service_id, function (err, service) {
            if (err) {
                res.send(err);
            }
            res.json(service);
        });
    })
    .put(function (req, res) {
        Service.findById(req.params.service_id, function (err, service) {
            if (err) {
                res.send(err);
            }

            service.name = req.body.name;
            service.description = req.body.description;
            service.price = req.body.price;

            service.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'Service updated!'});
            });
        });
    })
    .delete(function (req, res) {
        Service.remove({
            _id: req.params.service_id
        }, function (err, bear) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted'});
        });
    });

module.exports = router;