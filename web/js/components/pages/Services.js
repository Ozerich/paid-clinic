var React = require('react');
var PageHeader = require('../../components/blocks/PageHeader');
var ModelsList = require('../../components/blocks/ModelsList');
var Service = require('../../models/Service');

module.exports = React.createClass({
    render(){
        return (
            <div>
                <PageHeader title="Пациенты"/>
                <div className="content">
                    <ModelsList
                        editLabel="Редактировать услугу"
                        createLabel="Добавить услугу"
                        model={Service}
                        fields={{
                        'name': 'Название',
                        'description': 'Описание',
                        'price' : 'Цена'
                        }}
                    />
                </div>
            </div>
        );
    }
});