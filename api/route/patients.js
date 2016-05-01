var express = require('express');
var Patient = require('../models/Patient');

var router = express.Router();

router.route('/patients').post(function (req, res) {
    var patient = new Patient();

    patient.name = req.body.name;
    patient.email = req.body.email;
    patient.phone = req.body.phone;

    patient.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json({message: 'Patient created!'});
    });
}).get(function (req, res) {
    Patient.find(function (err, patients) {
        if (err) {
            res.send(err);
        }

        res.json(patients);
    });
});

router.route('/patients/:patient_id')
    .get(function (req, res) {
        Patient.findById(req.params.patient_id, function (err, patient) {
            if (err) {
                res.send(err);
            }
            res.json(patient);
        });
    })
    .put(function (req, res) {
        Patient.findById(req.params.patient_id, function (err, patient) {
            if (err) {
                res.send(err);
            }

            patient.name = req.body.name;
            patient.email = req.body.email;
            patient.phone = req.body.phone;

            patient.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'Patient updated!'});
            });
        });
    })
    .delete(function (req, res) {
        Patient.remove({
            _id: req.params.patient_id
        }, function (err, bear) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted'});
        });
    });

module.exports = router;