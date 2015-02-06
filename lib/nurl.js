/*jshint node:true*/
"use strict";
var
	request = require("request"),
	prettyjson = require("prettyjson"),
	_ = require("lodash"),
	util = require("util"),
	NurlOptions = require("./nurl-options").NurlOptions,
	ALLOWED_METHODS = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH", "PURGE"],
	DEFAULT_METHOD = "GET";

util.inherits(Nurl, NurlOptions);

function Nurl(args) {
	this.parameters = _.clone(args._);
	delete args._;
	this.options = args;

	if (this.parameters.length !== 1 && this.parameters.length !== 2) {
		throw new Error(util.format("Invalid usage. You passed %d parameters.", this.parameters.length));
	}
}

Nurl.prototype.isJson = function () {
	return !_.isUndefined(this.options.json);
};

Nurl.prototype.init = function () {
	var
		method = this.retriveMethod(),
		url = this.retriveUrl(),
		requestOptions = {
			"url": url,
			"method": method
		};

	requestOptions = _.extend(requestOptions, this.prepareHeaders(this.options));

	request(requestOptions, function (err, response, body) {
		if (err) {
			throw new Error(util.format("Can't connect to %s. Error: %s"), url, err.message);
		}
		if (this.options.pretty) {
			return console.log(prettyjson.render(body));
		}
		console.log(body);
	}.bind(this));
};

Nurl.prototype.retriveMethod = function () {
	var methodIndex;

	if (this.parameters.length === 1) {
		return DEFAULT_METHOD;
	}

	if (!_.isUndefined(this.options.all)) {
		return this.parameters[0];
	}

	methodIndex = ALLOWED_METHODS.indexOf(this.parameters[0].toUpperCase());

	if (methodIndex === -1) {
		throw new Error("Invalid request method");
	}

	return ALLOWED_METHODS[methodIndex];
};

Nurl.prototype.retriveUrl = function () {
	if (this.parameters.length === 1) {
		return this.parameters[0];
	}
	return this.parameters[1];
};

module.exports.Nurl = Nurl;