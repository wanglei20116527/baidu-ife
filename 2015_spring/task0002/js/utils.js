(function(window, document, undefined){

var _ = window._ = {};



var toString = Object.prototype.toString;


_.each = function(arr, fn){
	if(arr.forEach){
        arr.forEach(fn);

	}else{
		for(var i = 0; i < arr.length; ++i){
		    fn(arr[i], i, arr);
		}
	}
}

_.isType = function(type){
	return function(obj){
		return toString.call(obj) === "[object " + type + "]";
	};
}

_.isArray = Array.isArray || _.isType("Array");

_.isNull = function(obj){
	return obj === null;
};

_.isUndefined = function(obj){
	return obj === void 0;
};

_.isBoolean = function(obj){
	return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}

_.each(["Object", "Function", "Number", "String", "Date", "RegExp", "Symbol"], function(type){
	_["is" + type] = _.isType(type);
});

_.cloneObject = function(src){
	var target = null;

	if(_.isObject(src) || _.isArray(src) || _.isDate(src)){
		if(_.isDate(src)){
			target = new Date(src.getTime());

		}else if(_.isArray(src)){
			target = [];

			_.each(src, function(obj, index){
				target[index] = _.cloneObject(obj);
			});

		}else{
			var target = {};

			for(var key in src){
				target[key] = _.cloneObject(src[key]);
			}
		}

	}else{
		target = src;
	}

	return target;
};

_.keys = Object.keys || function(obj){
	var keys = [];

	for(var key in obj){
		if(obj.hasOwnProperty(key)){
			keys.push(key);
		}
	}

	return keys;
};

_.uniqArray = function(arr){
	var result = [];

	var map = {};
	_.each(arr, function(obj){
		if(!map[obj]){
			map[obj] = true;
			result.push(obj);
		}
	});

	return result;
};

_.trim = function(str){
	return str.replace(/^\s*(\S*)\s*$/, "$1");
};

_.getObjectLength = function(obj){
	return _.keys(obj).length;
};

_.isEmail = function(emailStr){

};

_.isMobilePhone = function(phone){

};


})(window, document);