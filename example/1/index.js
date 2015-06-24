var util = require('util'),
	
	TwitchAlerts = require('../../'),
	
	ta = new TwitchAlerts({ token: process.env.TwitchAlertsToken });

var recDon = ta.getRecentDonations();

recDon.then(function(data) {
		console.log(util.inspect(data, { depth: 10 }));
	}).catch(function(err) {
			var error = err.error;
			error.error ? console.log('%s - %s', error.error, error.message) : console.log('%d - %s', err.response.statusCode, err.response.statusMessage);
		});

// Not yet supported

/*var donGoal = ta.getDonationGoal();

donGoal.then(function(data) {
		console.log(util.inspect(data, { depth: 10 }));
	}).catch(function(err) {
			var error = err.error;
			error.error ? console.log('%s - %s', error.error, error.message) : console.log('%d - %s', err.response.statusCode, err.response.statusMessage);
		});*/