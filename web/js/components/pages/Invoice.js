var React = require('react');
var DataPoint = require('../../utils/DataPoint');
var PageHeader = require('../../components/blocks/PageHeader');
var Select2 = require('react-select2-wrapper');

module.exports = React.createClass({

    getInitialState(){
        return {
            doctors: DataPoint.Personal.get(),
            patients: DataPoint.Customers.get(),
            services: DataPoint.Services.get(),
            doctor_id: null,
            patient_id: null,
            service_ids: []
        };
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
                            <div className="box-footer">
                                <button type="submit" onClick={this._onSubmit} className="btn btn-success">Печать
                                </button>
                            </div>
                        </form>

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
