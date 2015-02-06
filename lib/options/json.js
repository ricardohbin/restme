/*jshint node:true*/
"use strict";
var _ = require("lodash");
function json(options) {
	options.headers = options.headers || {};
	options = _.extend(options.headers, {
			"accept": "application/json"
	});
	return options;
}
module.exports = json;