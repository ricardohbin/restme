/*jshint node:true*/
"use strict";
var _ = require("lodash");
function header (options) {
	function transformHeadersToJson (textHeaders) {
		textHeaders = textHeaders.replace(/'/g, "\"").split(",");
		textHeaders = "{" + textHeaders.map(
			function (value) {
				return value.split(":").map(function(value) {
					return "\"" + value.trim() + "\"";
				});
			}
		).map(function (value) {
			return value.join(":");
		}) + "}";
		return JSON.parse(textHeaders);
	}

	try {
		options.header = JSON.parse(options.header);
	} catch (e) {
		if (_.isString(options.header)) {
			options.header = transformHeadersToJson(options.header);
		}
	}

	return _.extend(options.headers, options.header);
}

module.exports = header;