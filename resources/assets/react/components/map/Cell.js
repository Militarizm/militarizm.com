/** @jsx React.DOM */
var React = require("react");

var Cell = React.createClass({

	mixins: [],	propTypes: {},	statics: {},

	getInitialState: function(){ return null },
	getDefaultProps: function(){ return null },

	componentWillMount : function(){},

	render: function(){

		var groundClass = "";
		if(this.props.type == 0){
			groundClass = "ground_plain";
		}
		if(this.props.type == 1){
			groundClass = "ground_mountain";
		}
		return(
			<div className="cell {groundClass}">
				&nbsp;
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

module.exports = Cell;