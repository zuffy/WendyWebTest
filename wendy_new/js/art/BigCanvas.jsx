import React from 'react';
var broadData = require('./broadCast.js').broadData;
var constant = require('../constant.js').constant;

var  debug = true;

var BigCanvas = React.createClass({
		
	getInitialState: function() {
		return {
			data: this.props.data,
			id: this.props.id
		};
	},

	componentDidMount: function() {
		var self = this;
		console.log("BigCanvas componentDidMount");

		self.createVideoView(self.state.id);
		
		broadData.add(function(val){ 	// 收听到数据
			if(self.myPlayer != null) {
				self.myPlayer.dispose();
				self.myPlayer = null;
			}
			// $(self).delay(1000).queue(function() {
			console.log('setState id:' + val);
			self.setState({id: val});
			// 	$(self).dequeue();
			// });
        });
	},

	componentDidUpdate: function() {
		var self = this;
		var el = $("#video_id");
		console.log('componentDidUpdate id:' + self.state.id);
		self.createVideoView(self.state.id);
	},

	createVideoView: function(val) {
		var currData = this.state.data.urls[val];
		if(currData.type == constant.View_Type_Movie) {
			var url = currData.url;
			if(debug){
				// url = "file:///C:/Users/zuffy.ma.SUPERD/Desktop/" + url;
			}
			this.createVideoIfnull(url)
		}
	},

	createVideoIfnull: function(url) {
		var self = this;
		$("#videoContent").html("<video id='video_id' class='video-js vjs-default-skin' controls preload='none' height='578' data-setup='{}'></video>");

		videojs('video_id', {}, function() {
			self.myPlayer = this;
			self.myPlayer.src({ type: "video/mp4", src: url });
			console.log('set play url ad play: ' + self.myPlayer);
			self.myPlayer.play();
		});
	},

	render: function() {
		var vi;
		var self = this;
		console.log('render type:' + this.props.data.urls[this.state.id].type + " id:" + this.state.id);
		
		if(this.props.data.urls[this.state.id].type == constant.View_Type_Movie){
			
			vi = <div id="videoContent"></div>

			console.log('================== render video content ==================')
		} else {
			var url = this.props.data.urls[this.state.id].url;
			vi = <img className='imageshow' src={url}/>
		}
		
		return (
			vi
		);
	}
});


export default BigCanvas;