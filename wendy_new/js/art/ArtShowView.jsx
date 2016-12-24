import React from 'react';
var broadData = require('./broadCast.js').broadData;
var constant = require('../constant.js').constant;
import BigCanvas from "./BigCanvas"
import ScreenShoots from "./ScreenShoots"
import CornerPlace from "./CornerPlace"
import Description from "./Description"

var ArtShowView = React.createClass({
		
	getInitialState: function() {
		return {
			data: constant.data[this.props.name],
			name: this.props.name,
			id: this.props.id
		};
	},

	setIndex: function(val) {
		// console.log("set index val:" + val);
		// this.setState({'id': val});
	},

	componentDidMount: function() {
		var self = this;
		console.log("ArtShowView did mount!");
		broadData.add(function(val){ //收听到数据
           // self.setState({'id': val});
        });
	},

	render: function() {
		console.log("render ArtShowView :" + this.state.id);
		var awards = this.state.data['awards'];
		//console.log(awards)
		return (
			<div className='mainContainer'>
				<BigCanvas data={this.state.data} id={this.state.id}/>
				<ScreenShoots data={this.state.data} id={this.state.id}/>
				<CornerPlace data={awards}/>
				<Description title={this.state.data['descTitle']} desc={this.state.data['desc']}/>
			</div>
		);
	}
});

export default ArtShowView;