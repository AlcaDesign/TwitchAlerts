var _ = require('lodash'),
	
	API = require('./lib/API');

function TwitchAlerts(options) {
	this.options = options || {};
	this.token = this.options.token || '';
	this.apiVersion = this.options.apiVersion || '';
	this.API = new API(this);
}

var extendOptions = _.defaults;

TwitchAlerts.prototype.getRecentDonations = function getRecentDonations(options) {
		var opts = {
					name: 'donations'
				};
		return this.API.request(extendOptions(opts, options));
	};


// Not really working yet
TwitchAlerts.prototype.getDonationGoal = function getDonationGoal(options) {
		var opts = {
					name: 'donationGoal'
				};
		return this.API.request(extendOptions(opts, options));
	};

module.exports = TwitchAlerts;