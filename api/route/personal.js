var express = require('express');
var Personal = require('../models/Personal');

var router = express.Router();

router.route('/personals').post(function (req, res) {
    var personal = new Personal();

    personal.name = req.body.name;
    personal.opportunity = req.body.opportunity;
    personal.email = req.body.email;
    personal.phone = req.body.phone;

    personal.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json({message: 'Personal created!'});
    });
}).get(function (req, res) {
    Personal.find(function (err, personals) {
        if (err) {
            res.send(err);
        }

        res.json(personals);
    });
});

router.route('/personals/:personal_id')
    .get(function (req, res) {
        Personal.findById(req.params.personal_id, function (err, personal) {
            if (err) {
                res.send(err);
            }
            res.json(personal);
        });
    })
    .put(function (req, res) {
        Personal.findById(req.params.personal_id, function (err, personal) {
            if (err) {
                res.send(err);
            }

            personal.name = req.body.name;
            personal.opportunity = req.body.opportunity;
            personal.email = req.body.email;
            personal.phone = req.body.phone;

            personal.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'Personal updated!'});
            });
        });
    })
    .delete(function (req, res) {
        Personal.remove({
            _id: req.params.personal_id
        }, function (err, bear) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted'});
        });
    });

module.exports = router;