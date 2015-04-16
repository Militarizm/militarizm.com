/** @jsx React.DOM */
var React = require("react");

var BuilderMap = React.createClass({

	mixins: [], propTypes: {}, statics: {},

	getInitialState: function() {

		var max_x = 100;
		var max_y = 100;
		var visible_x_start = 0;
		var visible_y_start = 0;
		var visible_width  = 20;
		var visible_height = 20;

		// [0,0] находится в левом нижнем углу.
		var map = [];
		for(var x=0; x<=max_x; x++){
			//var row = [];
			map[x] = [];
			for(var y=0; y<=max_y; y++){
				if(Math.random()<0.8){
					map[x][y] = 0;
				}else{
					map[x][y] = 1;
				}

			}
		}

		return {
			map: map,
			max_x: max_x,
			max_y: max_y,
			visible_x_start: visible_x_start,
			visible_y_start: visible_y_start,
			visible_width: visible_width,
			visible_height: visible_height
		}
	},
	getDefaultProps: function () { return null },

	componentWillMount: function () {},

	render: function () {

		var renderMap;
		for(var y = this.state.visible_y_start ; x < (this.state.visible_y_start + this.state.visible_height) ; y++)
		{
			for(var x = this.state.visible_x_start ; x < (this.state.visible_x_start + this.state.visible_width) ; x++)
			{

			}
		}

		return (
			<div className="map">
				Карта
			</div>
		);
	},

	componentDidMount: function () {},

	componentWillReceiveProps: function (nextProps) {},
	shouldComponentUpdate: function (nextProps, nextState) { return true; },

	componentWillUpdate: function (nextProps, nextState) {},
	componentDidUpdate: function (nextProps, nextState) {},

	componentWillUnmount: function (nextProps, nextState) {}
});

module.exports = BuilderMap;