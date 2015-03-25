/*jshint node:true*/
"use strict";
var
	_ = require("lodash"),
	optionsList = [
		require("./options/auth"),
		require("./options/header"),
		require("./options/json"),
		require("./options/akamai")
	];

function RestmeOptions () {}

RestmeOptions.prototype.prepareHeaders = function (options) {
	optionsList.forEach(function (optionFunc) {
		if (!_.isUndefined(options[optionFunc.name])) {
			options = _.extend(options, optionFunc(options));
		}
	});

	return options;
};

module.exports.RestmeOptions = RestmeOptions;
