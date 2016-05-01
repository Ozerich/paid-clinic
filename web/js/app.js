var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/layout/Application');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Home = require('./components/pages/Home');
var Patients = require('./components/pages/Patients');
var Personal = require('./components/pages/Personal');
var Services = require('./components/pages/Services');
var Invoice = require('./components/pages/Invoice');


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Application}>
            <IndexRoute component={Home}/>
            <Route path="patients" component={Patients}/>
            <Route path="personal" component={Personal}/>
            <Route path="services" component={Services}/>
            <Route path="invoice" component={Invoice}/>
        </Route>
    </Router>
), document.getElementById('application'));