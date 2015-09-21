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
				if(typeof oldPlayer != "undefined" && oldPlayer != null){
					videojs(oldPlayer).dispose();
				}
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
			if(data.type == TypeVideo){
				createVideoIfnull(data.url);
			} else {
				var url = data.url;
				createPic(url)
			}
		});

		if(data.type == TypeVideo) {
			$("#videoContent").show();
			$("#pictureContent").hide().css("width", 0);
			var url = data.urls[0].url;
			createVideoIfnull(url);
		} else if (data.type == TypePicCollection) {
			var oldPlayer = document.getElementById('video_id');
			if(typeof oldPlayer != "undefined" && oldPlayer != null){
				videojs(oldPlayer).dispose();
			}
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
				"title": "Fight to raise the heat in internet.",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/fights.gif"
			},{
				"title": "Chen Kun representing original taste chicken.",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/chenkuns.gif"
			},{
				"title": "Ke Zhen Dong representing crispy chicken.",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/kezhendongs.gif"
			}

		],
		"descTitle": "KFC - Vote",
		"desc": "<p>2012 KFC was flooded with negative news. How can we bring consumer attention back to their product? The last launch of crispy chicken in the test market had brought a lot of noise of it replacing the original, we made use of this situation and announced that we would have either original or crispy chicken and asked consumer to vote! </p><p>This was the first time people in China could vote! It successfully create lots of noise which once again bring the focus is on the product.</p>"
	},

	{
		"name": "kfcmenurevamp",
		"snapsrc": "images/collection/kfcmenurevamp.jpg",
		"type": TypeVideo,
		"urls": [
			{
				"title": "360 Case",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/menurevamp360s.jpg"
			},{
				"title": "TVC Launch",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/menurevamptvcs.jpg"
			},{
				"title": "Internet: Wu Mo Chou declaration",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/menurevampwu.jpg"
			},{
				"title": "Internet: Zhang Liang declaration",
				"url":"mp4/oceans-clip.mp4",
				"snapsrc": "images/collection/menurevampzhang.jpg"
			}

		],
		"descTitle": "aaa",
		"desc": "bbb"
	},

	{
		"name": "kotex",
		"snapsrc": "images/collection/kotex.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "KOTEX",
		"desc": "Most TVC in this catergory was blue & white with cheerful girls jumping around. Since their packaging was a black box which consumer love, we made the tone & manner of TVC stylish. Message was very simple: no compromise to only one texture."
	},

	{
		"name": "kfctastingchina",
		"snapsrc": "images/collection/kfctastingchina.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "KFC - TASTING CHINA",
		"desc": "<p>KFC was bringing in a new flavour - Zanthoxylum Armatum藤椒 to the food menu. </p><p>This is a spice often used in Si Chuan. </p><p>We used the style of a hot TV program  ‘Tasting  China’ to promote this new product.</p>"
	},

	{
		"name": "oilolympic",
		"snapsrc": "images/collection/oilolympic.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "ARAWANA COOKING OIL – OLYMPICS",
		"desc": "Arawana cooking oil was sponsoring 2008 China Olympics. The challenge was how to relate cooking oil to Olympic. We capitalised on the Chinese phase 'ADD OIL', which means 'keep going'. Different Chinese nations passing 'add oil'(encouragement) to one another using different language."
	},

	{
		"name": "hscoolway",
		"snapsrc": "images/collection/hscoolway.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "HEAD & SHOULDERS - COOL WAY",
		"desc": "This TVC was for a menthol shampoo that targeted young people which coat scientist can't relate to them. How to remove dandruff in a cool way? H&S or no way. This campaign started in China and later also ran in Europe, Asia Pacific and USA."
	},


	{
		"name": "hsmeteor",
		"snapsrc": "images/collection/hsmeteor.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "HEAD & SHOULDERS METEOR",
		"desc": "Head & Shoulders is famous of removing dandruff. This is a simple analogy to say H&S can remove any kind of white dot and make your wish of no dandruff comes true."
	},

	{
		"name": "cti",
		"snapsrc": "images/collection/cti.jpg",
		"type": TypeVideo,
		"urls": [{
			"title": "",
			"url":"mp4/oceans-clip.mp4",
			"snapsrc": ""
		}],
		"descTitle": "CTI - HIT",
		"desc": "Back in 1996 HK only had one telecom company, CSL. CTI wanted to give HK Government pressure to open up the telecom market in HK."
	},

	{
		"name": "hsdandruff",
		"snapsrc": "images/collection/hsdandruff.jpg",
		"type": TypePicCollection,
		"urls": [{
				"title": "",
				"url":"images/collection/printright1.jpg",
				"snapsrc": "images/collection/printright1.jpg"
			},
			{
				"title": "",
				"url":"images/collection/printright2.jpg",
				"snapsrc": "images/collection/printright2.jpg"
			},
			{
				"title": "",
				"url":"images/collection/printright3.gif",
				"snapsrc": "images/collection/printright3.gif"
			}
		],
		"descTitle": "HEAD & SHOULDERS - EFFICACY CAMPAIGN",
		"desc": ""
	},

	{
		"name": "tidelight",
		"snapsrc": "images/collection/tidelight.jpg",
		"type": TypePicCollection,
		"urls": [{
				"title": "",
				"url":"images/collection/tideright_1.gif",
				"snapsrc": "images/collection/tideright_1.gif"
			},
			{
				"title": "",
				"url":"images/collection/tideright_2.gif",
				"snapsrc": "images/collection/tideright_2.gif"
			},
			{
				"title": "",
				"url":"images/collection/tideright_3.gif",
				"snapsrc": "images/collection/tideright_3.gif"
			}
		],
		"descTitle": "HEAD & SHOULDERS - EFFICACY CAMPAIGN",
		"desc": ""
	},

	{
		"name": "arielcrab",
		"snapsrc": "images/collection/arielcrab.jpg",
		"type": TypePicCollection,
		"urls": [{
				"title": "",
				"url":"images/collection/arielcrab1.gif",
				"snapsrc": "images/collection/arielcrab1.gif"
			},
			{
				"title": "",
				"url":"images/collection/arielcrab2.gif",
				"snapsrc": "images/collection/arielcrab2.gif"
			},
			{
				"title": "",
				"url":"images/collection/arielcrab3.jpg",
				"snapsrc": "images/collection/arielcrab3.jpg"
			},
			{
				"title": "",
				"url":"images/collection/arielcrab4.jpg",
				"snapsrc": "images/collection/arielcrab4.jpg"
			}
		],
		"descTitle": "Ariel - Be Prepared",
		"desc": ""
	}

];