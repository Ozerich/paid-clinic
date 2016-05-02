var config = require('./config.json');
var express = require('express');
var app = express();
var jwt = require('express-jwt');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

var servicesRouter = require('./route/services');
app.use('/api', servicesRouter);

var patientsRouter = require('./route/patients');
app.use('/api', patientsRouter);

var personalRouter = require('./route/personal');
app.use('/api', personalRouter);

app.listen(process.env.PORT || 5000);



