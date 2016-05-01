var React = require('react');

var Link = require('react-router').Link;

module.exports = React.createClass({
    render(){
        var breadcrumbs = null;
        if (typeof this.props.breadcrumbs === 'undefined' || this.props.breadcrumbs) {
            breadcrumbs = (
                <ol className="breadcrumb">
                    <li><Link to={'/'}><i className="fa fa-dashboard"/> Главная страница</Link></li>
                    <li className="active">{this.props.title}</li>
                </ol>);
        }
        return (
            <section className="content-header">
                <h1>
                    {this.props.title}
                </h1>
                {breadcrumbs}
            </section>
        );
    }
});