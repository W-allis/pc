/*
 * base on jQuery than 1.5.1
 */
;(function(w) {
	
	function getObjectType(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1)
	}
	
	var Ajax, successCallback = errorCallback = function() {}
	
	Ajax = {
		interceptors: {
			request: function(callback) {
				if (getObjectType(resolve) === 'Function') {					
					return callback(config)
				}
			},
			response: function(resolve, reject) {

				if (getObjectType(resolve) === 'Function' && getObjectType(reject) === 'Function') {
					successCallback = resolve
					errorCallback = reject
				}
			}
		},
		
		
		get: function(options) {
			return $.ajax({
				type: 'get',
				url: options.url,
				async: true,
				data: options.data
			})
			.done(successCallback)
			.fail(errorCallback)
		},
		post: function(options) {
			
			return $.ajax({
				type: 'post',
				url: options.url,
				contentType: 'application/json',
				async: true,
				data: options.data
			})
			.done(successCallback)
			.fail(errorCallback)
		}
	}
	
	w.ajax = Ajax
})(window)
