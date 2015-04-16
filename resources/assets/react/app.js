/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");

//var Router = require('react-router-component');
//var Locations = React.createFactory(Router.Locations);
//var Location = React.createFactory(Router.Location);

var MilitarizmBuilder = require("./components/layouts/MilitarizmBuilder");
var MilitarizmClient = require("./components/layouts/MilitarizmClient");


if(document.getElementById("militarizm_client")) {
	React.render(
		<MilitarizmClient />,
		document.getElementById("militarizm_client")
	);
}
if(document.getElementById("militarizm_builder")){
	React.render(
	<MilitarizmBuilder />,
	document.getElementById("militarizm_builder")
);

}


