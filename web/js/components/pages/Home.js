var React = require('react');
var PageHeader = require('../../components/blocks/PageHeader');



module.exports = React.createClass({
    render(){
        return (
            <PageHeader title="Главная страница" breadcrumbs={false}/>
        );
    }
});