import React from 'react';
var broadData = require('./broadCast.js').broadData;

var ScreenShoots = React.createClass({

	handleChange: function(index) {
		// console.log('index:' + index);
		this.setState({'current': index});
		broadData.dispatch(index); //发布数据
	},
	
	getInitialState: function() {
		return {
			current: this.props.id
		};
	},

	componentDidMount: function() {
		console.log("ScreenShoots did mount!");
	},

	render: function() {
		var self = this;
		//console.log(this.props.data["urls"]);
		return (
			<ol className='navBar'>
			{
				self.props.data["urls"].map(function (item, i) {
					if(typeof(item.snapsrc) == "string" && item.snapsrc.length > 0){
					var cc = 'snapIcon'
					cc += self.state.current == i ? ' current' : '';
					
					return <li 
						className={cc}
						key={i} onClick={self.handleChange.bind(null, i)}>
						<img src={item.snapsrc} />
						<p>{item.title}</p>
						</li>;
					}
				})
			}
			</ol>
		);
	}
});

export default ScreenShoots;