var React = require('react');
var DataPoint = require('../../utils/DataPoint');
var PageHeader = require('../../components/blocks/PageHeader');
var Select2 = require('react-select2-wrapper');

var Personal = require('../../models/Personal');
var Service = require('../../models/Service');
var Patient = require('../../models/Patient');

module.exports = React.createClass({

    getInitialState(){
        return {
            doctors: [],
            patients: [],
            services: [],
            doctor_id: null,
            patient_id: null,
            service_ids: []
        };

    },

    componentDidMount(){
        this.loadState();
    },

    _serviceCollection: null,

    loadState(){
        var self = this;

        var collection = new Personal.Collection;
        collection.fetch({
            success: function () {
                var models = collection.models;
                self.setState({
                    doctors: models,
                    doctor_id: models.length ? models[0]._id : ''
                });
            }
        });


        var collection2 = new Patient.Collection;
        collection2.fetch({
            success: function () {
                var models = collection2.models;
                self.setState({
                    patients: models,
                    patient_id: models.length ? models[0]._id : ''
                });
            }
        });

        var collection3 = new Service.Collection;
        collection3.fetch({
            success: function () {
                self.setState({services: collection3.models});
                self.forceUpdate();
            }
        });

        this._serviceCollection = collection3;
    },

    getDoctorName: function (doctorId) {
        var doctors = this.state.doctors;

        for (var i = 0; i < doctors.length; i++) {
            if (doctors[i].id == doctorId) {
                return doctors[i].name;
            }
        }

        return '';
    },

    getPatientName: function (patientId) {
        var patients = this.state.patients;

        for (var i = 0; i < patients.length; i++) {
            if (patients[i].id == patientId) {
                return patients[i].name;
            }
        }

        return '';
    },

    getServicesString: function (services) {
        var data = [];

        for (var i = 0; i < services.length; i++) {
            var serviceId = services[i];

            var service = this._serviceCollection.get(serviceId);

            data.push(service.name + ' ($ ' + service.price + ')');
        }

        return data.join(', ');
    },

    render(){
        return (
            <div>
                <PageHeader title="Печать счета"/>
                <div className="content">
                    <div className="box">
                        <form role="form" onSubmit={this._onSubmit}>
                            <div className="box-body">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Доктор:</label>
                                    <select className="form-control" value={this.state.doctor_id}
                                            onChange={this._onChangeDoctor}>
                                        {this.state.doctors.map(function (doctor) {
                                            return (<option key={doctor.id} value={doctor.id}>{doctor.name}</option>);
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Пациент:</label>
                                    <select className="form-control" value={this.state.patient_id}
                                            onChange={this._onChangePatient}>
                                        {this.state.patients.map(function (patient) {
                                            return (
                                                <option key={patient.id} value={patient.id}>{patient.name}</option>);
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Услуги:</label>
                                    <select multiple className="form-control" onChange={this._onChangeServices}>
                                        {this.state.services.map(function (service) {
                                            return (
                                                <option key={service.id} value={service.id}>{service.name}</option>);
                                        })}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="box print-box">
                        <div className="box-header">
                            <h3 className="box-title">Печать счета</h3>
                        </div>
                        <div className="box-body">
                            <table className="table table-bordered" style={{width: '400px'}}>
                                <tbody>
                                <tr>
                                    <td><strong>Доктор</strong></td>
                                    <td>{this.getDoctorName(this.state.doctor_id)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Пациент</strong></td>
                                    <td>{this.getPatientName(this.state.patient_id)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Услуги</strong></td>
                                    <td>{this.getServicesString(this.state.service_ids)}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="box-footer">
                            <button type="submit" onClick={this._onSubmit} className="btn btn-success">Печать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    _onChangeDoctor: function (e) {
        this.setState({doctor_id: e.target.value});
    },

    _onChangePatient: function (e) {
        this.setState({patient_id: e.target.value});
    },

    _onChangeServices: function (e) {
        this.setState({
            service_ids: [].slice.call(e.target.selectedOptions).map(o => {
                return o.value;
            })
        });
    },

    _onSubmit: function () {
        window.print();
    }
});
