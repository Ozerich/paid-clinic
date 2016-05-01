var React = require('react');

module.exports = React.createClass({

    getInitialState: function () {
        var obj = {
            editMode: false,
            id: null,
            items: []
        };
        for (var i in this.props.fields) {
            if (this.props.fields.hasOwnProperty(i)) {
                obj[i] = '';
            }
        }
        return obj;
    },

    _collection: null,
    getCollection(){
        if (!this._collection) {
            this._collection = new this.props.model.Collection();
        }

        return this._collection;
    },

    loadState(){
        var self = this;

        var collection = this.getCollection();
        this.getCollection().fetch({
            success: function () {
                self.setState({items: collection.models});
            }
        });
    },

    componentDidMount: function () {
        this.loadState();
    },

    render(){
        var self = this;

        var fields = [];
        for (var i in this.props.fields) {
            if (this.props.fields.hasOwnProperty(i)) {
                fields.push({
                    id: i,
                    label: this.props.fields[i]
                });
            }
        }

        var items = this.state.items.map(function (item) {
            return (
                <tr key={item.id}>
                    {fields.map(function (field) {
                        var value = item[field.id];
                        return (<td>{value}</td>)
                    })}
                    <td>
                        <a href="#" className="btn btn-primary btn-mini" onClick={self._onUpdate.bind(self, item)}>Редактировать</a>
                        &nbsp;&nbsp;
                        <a href="#" className="btn btn-danger btn-mini" onClick={self._onDelete.bind(self, item.id)}>Удалить</a>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <div className="box">
                    <div className="box-header">
                        <h3 class="box-title">{this.state.editMode ? this.props.editLabel : this.props.createLabel}</h3>
                    </div>
                    <form role="form" onSubmit={this._onSubmit}>
                        <div className="box-body">
                            {fields.map(function (field) {
                                var value = self.state[field.id];
                                return (
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">{field.label}</label>
                                        <input type="text" onChange={self._changeInput.bind(self, field.id)}
                                               value={value}
                                               className="form-control"
                                               id="exampleInputEmail1"/>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="box-footer">
                            <div className="pull-left">
                                <button type="submit"
                                        className="btn btn-success">{this.state.id ? 'Редактировать' : 'Добавить'}</button>
                            </div>
                            <div className="pull-right">
                                <button className="btn btn-danger"
                                        style={this.state.editMode ? {} : {display: 'none'}}
                                        onClick={this._onCancel}>Отменить
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="box">
                    <div className="box-body">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                {fields.map(function (field) {
                                    return (
                                        <th>{field.label}</th>
                                    );
                                })}
                                <th>&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    },

    _changeInput: function (field, e) {
        var value = e.target.value;

        var obj = {};
        obj[field] = value;
        this.setState(obj);
    },

    _onSubmit(e){
        var self = this;

        e.preventDefault();

        var obj = {}, i;
        for (i in this.props.fields) {
            if (this.props.fields.hasOwnProperty(i)) {
                obj[i] = this.state[i];
            }
        }

        var model;
        if (this.state.id) {
            model = this.getCollection().get(this.state.id);
        }
        else {
            model = new this.props.model;
        }

        var state = {
            editMode: false,
            id: null
        };

        for (i in this.props.fields) {
            if (this.props.fields.hasOwnProperty(i)) {
                model[i] = this.state[i];
                state[i] = '';
            }
        }

        this.setState(state);

        model.save([], {
            success: function () {
                self.loadState();
            }
        });
    },

    _onDelete: function (id, e) {
        e.preventDefault();

        var self = this;

        var model = this.getCollection().get(id);
        model.destroy({
            success: function () {
                self.loadState();
            }
        })

    },

    _onUpdate: function (model, e) {
        e.preventDefault();

        this.setState({
            editMode: true,
            id: model.id,
            name: model.name,
            description: model.description,
            price: model.price
        });

        var state = {
            editMode: true,
            id: model.id
        };

        for (var i in this.props.fields) {
            if (this.props.fields.hasOwnProperty(i)) {
                state[i] = model[i];
            }
        }

        this.setState(state);
    },

    _onCancel: function (e) {
        e.preventDefault();

        var state = {
            editMode: false,
            id: null
        };

        for (var i in this.props.fields) {
            if (this.props.fields.hasOwnProperty(i)) {
                state[i] = '';
            }
        }

        this.setState(state);
    }
});