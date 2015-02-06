/*jshint node:true*/
"use strict";
var _ = require("lodash");
function auth (options) {
	var obj = {}, authOptions = options.auth.split("@");
	if (authOptions.length !== 2) {
		throw new Error("The auth parameter must have the user@pass convection.");
	}

	obj.auth = {
		"user": authOptions[0],
		"pass": authOptions[1]
	};
	return obj;
}

module.exports = auth;