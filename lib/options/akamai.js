/*jshint node:true*/
"use strict";
var _ = require("lodash");
function akamai(options) {
	options.headers = options.headers || {};
	options = _.extend(options.headers, {
		"Pragma": [
      "akamai-x-cache-on",
      "akamai-x-cache-remote-on",
      "akamai-x-check-cacheable",
      "akamai-x-get-cache-key",
      "akamai-x-get-extracted-values",
      "akamai-x-get-nonces",
      "akamai-x-get-ssl-client-session-id",
      "akamai-x-get-true-cache-key",
      "akamai-x-serial-no"
    ].join(",")
	});
	return options;
}
module.exports = akamai;
