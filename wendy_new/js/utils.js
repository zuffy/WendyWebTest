(function(context){
	var utils = {
		paramAtPath: function(param) {
			var path = window.location.search;
			var reg = new RegExp("[\?]?" + param + "=([^&]+)", "");
			var p = path.match(reg);
			// console.log(p)
			if(p.length > 0) {
				return p[1];
			}
			return "";
		}
	}

	context.utils = utils;

})(window);