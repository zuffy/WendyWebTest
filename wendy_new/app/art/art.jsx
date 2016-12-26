import React,{Component} from 'react';

import ArtShowView from './ArtShowView'

var utils = require('../utils.js').utils;
var ReactDom = require('react-dom');

var App = React.createClass({
	getInitialState: function() {
		var bb = utils;
		var name = utils.paramAtPath("name") || "default";
		var id = utils.paramAtPath("id") || 0;
		return {
			name: name,
			id: id
		};
	},

	componentDidMount: function() {
		console.log("App did mount!");
	},

	render: function() {
		return (
			<ArtShowView name={this.state.name} id={this.state.id}/>
		);
	}
});

ReactDom.render(
	<App />,
	document.getElementById('content')
);