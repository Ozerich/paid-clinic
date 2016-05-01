var React = require('react');
var Header = require('./Header');
var Sidebar = require('./Sidebar');
var Footer = require('./Footer');

module.exports = React.createClass({
    render(){
        return (
            <div class="wrapper">
                <Header/>
                <Sidebar/>
                <div className="content-wrapper">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
});