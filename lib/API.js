var url = require('url'),
	
	_ = require('lodash'),
	rp = require('request-promise'),
	
	apiData = require('./API.json');

function API(options) {
	this.token = options.token;
	this.defaultAPIVersion = 'v1';
	this.apiVersion = _.has(apiData.API, options.apiVersion) ? options.apiVersion : this.defaultAPIVersion;
	this.ad = apiData.API[this.apiVersion];
}

API.prototype.locateEndpoint = function locationEndpoint(options, result, resultDefault) {
		var lookup = _.find(this.ad.endpoints, options || {});
		if(!_.isEmpty(result)) {
			lookup = _.result(lookup, result, resultDefault);
		}
		return lookup;
	};

API.prototype.resolve = function APIResolve(options) {
		return url.resolve(this.ad.base, options.path || '');
	};

API.prototype.request = function request(options) {
		var api = apiData.names[this.apiVersion],
			endpointName = api[options.name],
			ep = this.locateEndpoint({ name: endpointName });
		if(ep !== undefined) {
			var uri = this.resolve({ path: ep.path }),
				auth = ep.auth,
				headers = {
							Accept: ep.contentType,
							'Accept-Encoding': 'gzip, deflate, sdch',
							Connection: 'keep-alive'
						},
				qs = {callback:'?'},
				defaultQS = _.map(ep.queryOptions, function(e) {
									var b = {};
									if(e.required) {
										b[e.name] = e.defaultValue;
									}
									return b;
								}),
				qsOptions = _.defaults(options.qs || {}, defaultQS);
			if(auth.required) {
				qs[auth.qs] = this.token;
			}
			_.merge(qs, qsOptions);
			var opts = {
						uri: uri,
						method: ep.method,
						qs: qs,
						headers: headers,
						gzip: true,
						json: true
					};
			return rp(opts);
		}
		return false;
	};

module.exports = API;
