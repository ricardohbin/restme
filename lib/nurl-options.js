/*jshint node:true*/
"use strict";
var
	_ = require("lodash"),
	optionsList = [];

optionsList.push(
	require("./options/auth"),
	require("./options/json")
);

function NurlOptions () {}

NurlOptions.prototype.prepareHeaders = function (options) {
	optionsList.forEach(function (optionFunc) {
		if (!_.isUndefined(options[optionFunc.name])) {
			options = _.extend(options, optionFunc(options));
		}
	});

	return options;
};

module.exports.NurlOptions = NurlOptions;
