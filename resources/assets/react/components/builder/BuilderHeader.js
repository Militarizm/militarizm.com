/** @jsx React.DOM */
var React = require("react");

var BuilderHeader = React.createClass({

	mixins: [], propTypes: {}, statics: {},

	getInitialState: function () { return null },
	getDefaultProps: function () { return null },

	componentWillMount : function(){},

	render: function(){
		return(
			<div className="builder_header">
				Хедер
			</div>
		);
	},

	componentDidMount:   function(){},

	componentWillReceiveProps: function(nextProps) {},
	shouldComponentUpdate: function(nextProps, nextState) { return true; },

	componentWillUpdate: function(nextProps, nextState) {},
	componentDidUpdate:  function(nextProps, nextState) {},

	componentWillUnmount:  function(nextProps, nextState) {}
});

module.exports = BuilderHeader;