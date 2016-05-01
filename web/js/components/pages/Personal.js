var React = require('react');
var PageHeader = require('../../components/blocks/PageHeader');
var ModelsList = require('../../components/blocks/ModelsList');
var Personal = require('../../models/Personal');

module.exports = React.createClass({
    render(){
        return (
            <div>
                <PageHeader title="Персонал"/>
                <div className="content">
                    <ModelsList
                        editLabel="Редактировать сотрудника"
                        createLabel="Добавить сотрудника"
                        model={Personal}
                        fields={{
                            'name': 'ФИО',
                            'opportunity' : 'Должность',
                            'email' : 'Электронная почта',
                            'phone' : 'Контактный телефон'
                        }}
                    />
                </div>
            </div>
        );
    }
});