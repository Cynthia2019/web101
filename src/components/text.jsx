import React from 'react';
var Parent = React.createClass({
    render : function () {
        return (
            <div className="parent">
                <p>Parent</p>
                <div className="child-list">
					<Child wait={1000} />
					<Child wait={5000} />
					<Child wait={4000} />
                </div>
            </div>
        )
    }
});

var Child = React.createClass({
	getInitialState : function () {
		return({hidden : "hidden"});
	},
	componentWillMount : function () {
        var that = this;
		setTimeout(function() {
			that.show();
		}, that.props.wait);
	},
	show : function () {
		this.setState({hidden : ""});
	},
    render : function () {
        return (
            <div className={this.state.hidden}>
                <p>Child - {this.props.wait}ms</p>
            </div>
        )
    }
});

React.render(
    <Parent />)