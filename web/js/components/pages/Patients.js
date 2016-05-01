var React = require('react');
var PageHeader = require('../../components/blocks/PageHeader');
var ModelsList = require('../../components/blocks/ModelsList');
var Patient = require('../../models/Patient');

module.exports = React.createClass({
    render(){
        return (
            <div>
                <PageHeader title="Пациенты"/>
                <div className="content">
                    <ModelsList
                        editLabel="Редактировать пациента"
                        createLabel="Добавить пациента"
                        model={Patient}
                        fields={{
                        'name': 'Имя',
                        'email' : 'Электронная почта',
                        'phone' : 'Контактный телефон'
                        }}
                    />
                </div>
            </div>
        );
    }
});