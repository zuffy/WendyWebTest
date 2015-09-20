var TypeVideo = 0;
var TypePicCollection = 1;
var dataObject = [
	{
		"name": "bigstain",
		"snapsrc": "images/collection/bigstain.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "Ariel - Big Stain",
		"desc": "Originally, the client’s brief was to ask us to do a poster for an event to promote a new product, which could remove stain very easily. So easy that it made cleaning stain fun instead of a painful job. So we created this game of removing stain instead of just a poster to engage consumer."
	},
	{
		"name": "kfcvote",
		"snapsrc": "images/collection/kfcvote.jpg",
		"type": TypeVideo,
		"urls": [
			{
				"title": "360. TVC, print, social, digital plateform, event, content.",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/360s.gif"
			},{
				"title": "360. TVC, print, social, digital plateform, event, content.",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/360s.gif"
			}
		],
		"descTitle": "aaa",
		"desc": "bbb"
	},
	{
		"name": "kfcmenurevamp",
		"snapsrc": "images/collection/kfcmenurevamp.jpg",
		"type": TypePicCollection,
		"urls": [{
				"title": "",
				"url":"images/collection/printright1.jpg",
				"snapsrc": "images/collection/printright1.jpg"
			},
			{
				"title": "",
				"url":"images/collection/printright1.jpg",
				"snapsrc": "images/collection/printright1.jpg"
			},
			{
				"title": "",
				"url":"images/collection/printright1.jpg",
				"snapsrc": "images/collection/printright1.jpg"
			}
		],
		"descTitle": "cc",
		"desc": "dd"
	}
];

(function(){
	var myPlayer;
	var currentSelect = -1;
	
	$(function(){

		var list = $("#pics");
		var content = "";

		for (var i = 0; i < dataObject.length; i++) {
			var item = dataObject[i];
			content += "<li index=\"" + i + "\"><img src=\"" + item.snapsrc + "\"></li>"; 
		};

		list.html(content);

		setItem(0);

		$("#pics li").bind("click", function (){
			var self = $(this);
			//console.log(self.attr("index"));
			var id = parseInt(self.attr("index"));
			if(currentSelect == id) return;
			currentSelect = id;
			setItem(id);
		});

	});

	function setItem(id) {
		var data = dataObject[id]; 
		$("#list ul").html("");
		$("#videoContent").css("float", "");
		$("#pictureContent").css("float", "");
		$("#descriptionTitle").html(data.descTitle);
		$("#description").html(data.desc);
		if (data.urls.length == 1){
			if(data.type == TypeVideo) {
				$("#videoContent").show();
				$("#pictureContent").hide().css("width", 0);
				var url = data.urls[0].url;
				createVideoIfnull(url);
			} else if (data.type == TypePicCollection) {
				var oldPlayer = document.getElementById('video_id');
				videojs(oldPlayer).dispose();
				$("#videoContent").hide();
				$("#pictureContent").show().css("width", 750);
				var url = data.urls[0].url;
				createPic(url);
			}
			return;
		}
		updateData(data);
	}

	function updateData(data) {
		var list = $("#list ul");
		var content = "";
		for (var i = 0; i < data.urls.length; i++) {
			var item = data.urls[i];
			content += "<li index=\"" + i + "\"><img src=\"" + item.snapsrc + "\"><p>"+ item.title +"</p></li>"; 
		};

		list.html(content);
		$("#videoContent").css("float", "left");
		$("#pictureContent").css("float", "left");

		$("#list li").unbind("click").bind("click", function (){
			var self = $(this);
			//console.log(self.attr("index"));
			var id = parseInt(self.attr("index"));
			var data = dataObject[currentSelect].urls[id];
			if(typeof data == "undefined") return;
			createVideoIfnull(data.url);
		});

		if(data.type == TypeVideo) {
			$("#videoContent").show();
			$("#pictureContent").hide().css("width", 0);
			var url = data.urls[0].url;
			createVideoIfnull(url);
		} else if (data.type == TypePicCollection) {
			var oldPlayer = document.getElementById('video_id');
			videojs(oldPlayer).dispose();
			$("#videoContent").hide();
			$("#pictureContent").show().css("width", 750);
			var url = data.urls[0].url;
			createPic(url)
		}
	}

	function createVideoIfnull(url) {
		var el = $("#video_id");
		if(el.size() > 0) {
		var oldPlayer = document.getElementById('video_id');
			videojs(oldPlayer).dispose();
		}
		$("#videoContent").html("<video id=\"video_id\" class=\"video-js vjs-default-skin\" controls preload=\"none\" width=\"750\" height=\"480\" data-setup=\"{}\"></video>");
		videojs('video_id', {}, function() {
			myPlayer = this;
			// myPlayer.src({ type: "video/mp4", src: url });
			// myPlayer.play();
			console.log('Good to go!');
		});
	}

	function createPic(url) {
		console.log(url);
		$("#pictureContent").html('<img src="' + url +'" width=750 height=578>');
	}
})();