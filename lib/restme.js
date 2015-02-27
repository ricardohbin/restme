/*jshint node:true*/
"use strict";
var
	request = require("request"),
	prettyjson = require("prettyjson"),
	_ = require("lodash"),
	util = require("util"),
	RestmeOptions = require("./restme-options").RestmeOptions,
	ALLOWED_METHODS = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH", "PURGE"],
	DEFAULT_METHOD = "GET";

util.inherits(Restme, RestmeOptions);

function Restme(args) {
	this.parameters = _.clone(args._);
	delete args._;
	this.options = args;

	if (this.parameters.length !== 1 && this.parameters.length !== 2) {
		throw new Error(util.format("Invalid usage. You passed %d parameters.", this.parameters.length));
	}
}

Restme.prototype.isJson = function () {
	return !_.isUndefined(this.options.json);
};

Restme.prototype.init = function () {
	var
		method = this.retriveMethod(),
		url = this.retriveUrl(),
		requestOptions = {
			"url": url,
			"method": method
		};

	this.options.headers = this.options.headers || {};

	//Abstract this to decorators later :D!
	if (this.options.body) {
		this.options.json = true;
		try {
			this.options.body = JSON.parse(this.options.body);
		} catch (e) {
			throw new Error("Invalid JSON in body option: " + this.options.body);
		}
	}

	requestOptions = _.extend(requestOptions, this.prepareHeaders(this.options));

	console.log(requestOptions);

	request(requestOptions, function (err, response, body) {
		if (err) {
			throw new Error(util.format("Can't connect to %s. Error: %s", url, err.message));
		}

		try {
			body = JSON.parse(body);
		}catch(e){
			//nothing... The response can be non json
			body = body;
		}

		//Abstract this to transformations later :D!
		if (this.options.pretty) {
			return console.log(prettyjson.render(body));
		}
		console.log(body);
	}.bind(this));
};

Restme.prototype.retriveMethod = function () {
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

Restme.prototype.retriveUrl = function () {
	if (this.parameters.length === 1) {
		return this.parameters[0];
	}
	return this.parameters[1];
};

module.exports.Restme = Restme;