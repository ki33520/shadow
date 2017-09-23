/*basic component*/
if (!window.JSON) {
	window.JSON = {
		parse: function(jsonStr) {
			return eval('(' + jsonStr + ')');
		},
		stringify: function(jsonObj) {
			var result = '',
				curVal;
			if (jsonObj === null) {
				return String(jsonObj);
			}
			switch (typeof jsonObj) {
				case 'number':
				case 'boolean':
					return String(jsonObj);
				case 'string':
					return '"' + jsonObj + '"';
				case 'undefined':
				case 'function':
					return undefined;
			}

			switch (Object.prototype.toString.call(jsonObj)) {
				case '[object Array]':
					result += '[';
					for (var i = 0, len = jsonObj.length; i < len; i++) {
						curVal = JSON.stringify(jsonObj[i]);
						result += (curVal === undefined ? null : curVal) + ",";
					}
					if (result !== '[') {
						result = result.slice(0, -1);
					}
					result += ']';
					return result;
				case '[object Date]':
					return '"' + (jsonObj.toJSON ? jsonObj.toJSON() : jsonObj.toString()) + '"';
				case '[object RegExp]':
					return "{}";
				case '[object Object]':
					result += '{';
					for (i in jsonObj) {
						if (jsonObj.hasOwnProperty(i)) {
							curVal = JSON.stringify(jsonObj[i]);
							if (curVal !== undefined) {
								result += '"' + i + '":' +curVal + ',';
							}
						}
					}
					if (result !== '{') {
						result = result.slice(0, -1);
					}
					result += '}';
					return result;

				case '[object String]':
					return '"' + jsonObj.toString() + '"';
				case '[object Number]':
				case '[object Boolean]':
					return jsonObj.toString();
			}
		}
	};
}

var _basic = {
	wx: function(){
		var ua = window.navigator.userAgent.toLowerCase();
		var status = false;
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){
			status = true;
		}else{
			status = false;
		}
		this.wx = status;
		return status;
	},
	android: function(){
		var u = navigator.userAgent;
		var status = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
		this.os = status ? 'android' : this.os;
		this.android = status;
		return status;
	},
	ios: function(){
		var u = navigator.userAgent;
		var status = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		this.os = status ? 'ios' : this.os;
		this.ios = status;
		return status;
	},
	queryString: function(str){
		var sValue=location.search.match(new RegExp("[\?\&]"+str+"=([^\&]*)(\&?)","i"));
		return sValue?sValue[1]:sValue;
	},
	init: function(){
		this.wx();
		this.android();
		this.ios();
	}
}
_basic.init();



