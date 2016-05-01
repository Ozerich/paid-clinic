var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="adminlte/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Администратор</p>
                            <a href="#"><i className="fa fa-circle text-success"/> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="header">Навигационное меню</li>
                        <li>
                            <Link to={'personal'}>
                                <i className="fa fa fa-book"/>
                                <span>Персонал</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'patients'}>
                                <i className="fa fa-users"/>
                                <span>Пациенты</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'services'}>
                                <i className="fa fa-money"/>
                                <span>Платные услуги</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'invoice'}>
                                <i className="fa fa-print"/>
                                <span>Печать счета</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
});