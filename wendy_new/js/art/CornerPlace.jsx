import React from 'react';

var CornerPlace = React.createClass({
		
	getInitialState: function() {
		return {
		};
	},

	componentDidMount: function() {
		// console.log("CornerPlace did mount!");
	},

	render: function() {
		var self = this;
		console.log(self.props.data);
		return (
			<div className="awards"> 
				<p className='awardsTitle'>{this.props.data.desc} </p>
				<ol className='awardsList'>
				{
					self.props.data["urls"].map(function (item, i) {
						return <li className='awardsItem' key={i}>
							<img src={item.url} height='45'/>
							</li>;
					})
				}
				</ol>
			</div>
		);
	}
});

export default CornerPlace;