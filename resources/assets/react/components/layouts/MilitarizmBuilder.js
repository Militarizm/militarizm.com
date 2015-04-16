/** @jsx React.DOM */

var React = require("react");
var BuilderHeader = require("../builder/BuilderHeader");
var BuilderMap = require("../builder/BuilderMap");
var BuilderSidebar = require("../builder/BuilderSidebar");

var MilitarizmBuilder = React.createClass({

	render: function(){
		return(
			<div>
				<div className='container'>
					<div className="row">
						<div className="col-md-12">
							<BuilderHeader />
						</div>
					</div>
					<div className="row">
						<div className="col-md-9">
							<BuilderMap />
						</div>
						<div className="col-md-3">
							<BuilderSidebar />
						</div>
					</div>
				</div>

			</div>
		);
	}

});

module.exports = MilitarizmBuilder;