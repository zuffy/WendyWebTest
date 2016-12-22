(function(context){

	var TypeVideo = 0;
	var TypePicCollection = 1;
	var AwardTypePic = 2;
	var AwardTypeDes = 3;
	
	var _data = {
		"dandruff": {

			"urls": [
				{
					"type": TypePicCollection,
					"title": "flag.jpg",
					"url":"images/bigImg/flag.jpg",
					"snapsrc": "images/collection/printright1.jpg"
				},{
					"type": TypePicCollection,
					"title": "cross.jpg",
					"url": "images/bigImg/cross.jpg",
					"snapsrc": "images/collection/printright2.jpg"
				},{
					"type": TypePicCollection,
					"title": "fullstop.jpg",
					"url":"images/bigImg/fullstop.jpg",
					"snapsrc": "images/collection/printright3.gif"
				}

			],

			"awards": {
				"desc": "",
				"urls":[
					{"url": "images/award/cannes.png"},
					{"url": "images/award/Spikes_Asia.gif"},
					{"url": "images/award/Longxi.png"},
					{"url": "images/award/greatwall.png"}
				]
			},

			"descTitle": "HEAD & SHOULDERS",
			"desc": "<p>Idea:Dandruff surrender to Head & Shoulders.</p> <p>This campaign win the first cannes in China.</p>"
		}

		,"stainattack": {

			"urls": [
				{
					"type": TypePicCollection,
					"title": "ArielDefence Crab.jpg",
					"url":"images/bigImg/ArielDefence Crab.jpg",
					"snapsrc": "images/collection/arielcrab1.gif"
				},{
					"type": TypePicCollection,
					"title": "ArielDefence Spaghetti.jpg",
					"url": "images/bigImg/ArielDefence Spaghetti.jpg",
					"snapsrc": "images/collection/arielcrab2.gif"
				},{
					"type": TypePicCollection,
					"title": "ArielDefence Hotdog.jpg",
					"url":"images/bigImg/ArielDefence Hotdog.jpg",
					"snapsrc": "images/collection/arielcrab3.jpg"
				},{
					"type": TypePicCollection,
					"title": "ArielDefence Burger.jpg",
					"url":"images/bigImg/ArielDefence Burger.jpg",
					"snapsrc": "images/collection/arielcrab4.jpg"
				}

			],

			"awards": {
				"desc": "Headline:Be prepared with Ariel",
				"urls":[
					{"url": "images/award/cannes.png"},
					{"url": "images/award/london.png"}
				]
			},

			"descTitle": "Ariel washing powder",
			"desc": "<p>You don't know when will you be attacted by stain. Be Prepared.</p>"

		}


		,"soufeel": {

			"urls": [
				{
					"type": TypePicCollection,
					"title": "Window",
					"url":"images/bigImg/Soufeel window.jpg",
					"snapsrc": "images/collection/soufeel_windown.png"
				},{
					"type": TypePicCollection,
					"title": "DIY area",
					"url": "images/bigImg/Soufeel diywall.jpg",
					"snapsrc": "images/collection/soufeel2.png"
				},{
					"type": TypePicCollection,
					"title": "ArielDefence Hotdog.jpg",
					"url":"images/bigImg/Soufeel crystal.jpg",
					"snapsrc": "images/collection/soufeel3.png"
				},{
					"type": TypePicCollection,
					"title": "ArielDefence Burger.jpg",
					"url":"images/bigImg/Soufeel KV.jpg",
					"snapsrc": "images/collection/soufeel4.png"
				},{
					"type": TypePicCollection,
					"title": "ArielDefence Burger.jpg",
					"url":"images/bigImg/Soufeel logo.jpg",
					"snapsrc": "images/collection/soufeel5.png"
				}

			],

			"awards": {
				"desc": "",
				"urls":[
				]
			},

			"descTitle": "SOUFFEL",
			"desc": "<p>Brief:Develop total brand look for Soufeel. Including Logo,VI,KV & Shop design.</p>\
			<p>Souffeel is a new jewerley brand similar to Pandora.</p>\
			<p>Idea:Soul+feel = human connection and feelings.</p>\
			<p>Its young,artistic and internaltionl.</p>\
			<p>We make the shop like secret garden.Once consumer enter the shop, they started the journey of connection and feel.</p>"

		}

		,"lightbulb": {

			"urls": [
				{
					"type": TypePicCollection,
					"title": "flag.jpg",
					"url":"images/bigImg/flag.jpg",
					"snapsrc": "images/collection/printright1.jpg"
				},{
					"type": TypePicCollection,
					"title": "cross.jpg",
					"url": "images/bigImg/cross.jpg",
					"snapsrc": "images/collection/printright2.jpg"
				},{
					"type": TypePicCollection,
					"title": "fullstop.jpg",
					"url":"images/bigImg/fullstop.jpg",
					"snapsrc": "images/collection/printright3.gif"
				}

			],

			"awards": {
				"desc": "",
				"urls":[
					{"url": "images/award/cannes.png"},
					{"url": "images/award/Spikes_Asia.gif"},
					{"url": "images/award/Longxi.png"},
					{"url": "images/award/greatwall.png"}
				]
			},

			"descTitle": "Tide",
			"desc": "<p>Idea:Dandruff surrender to Head & Shoulders.</p> <p>This campaign win the first cannes in China.</p>"
		}

	}

	var constant = {
		View_Type_Movie : TypeVideo, 
		View_Type_Picture : TypePicCollection, 
		data : _data
	}

	context.constant = constant;

})(window);