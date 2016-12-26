import React from 'react';

var Description = React.createClass({
		
	getInitialState: function() {
		return {
		};
	},

	componentDidMount: function() {
		// console.log("Description did mount!");
	},

	render: function() {
		return (
			<div className='clear desContainer'>
				<p className='title'>{this.props.title}</p>
				<p className='desc' dangerouslySetInnerHTML={{__html:this.props.desc}}></p>
			</div>
		);
	}
});

export default Description;