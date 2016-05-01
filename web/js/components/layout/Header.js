var React = require('react');

module.exports = React.createClass({
    render(){
        return (
            <header className="main-header">
                <a href="/" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg">Платная поликлиника</span>
                </a>
            </header>
        )
    }
});