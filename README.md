# TwitchAlerts

A basic, unofficial TwitchAlerts.com API Node.js module

*Twitch is a trademark or registered trademark of Twitch Interactive, Inc. in the U.S. and/or other countries. "TwitchAlerts" is not operated by, sponsored by, or affiliated with Twitch Interactive, Inc. in any way.*

*"TwitchAlerts" is not operated by, sponsored by, or affiliated with TwitchAlerts in any way*

## Install

```
	$ npm install --save AlcaDesign/TwitchAlerts
```

## Usage

You will require an API access token for every request to their API. [You can find the access token here.](https://www.twitchalerts.com/dashboard/api-settings)

```javascript

	var TwitchAlerts = require('twitchalerts'),
		ta = new TwitchAlerts({ token: 'token_here' });

```

### Supported API Endpoints

#### ta.getRecentDonations(options)

Gets the list of recent donators for the authenticated user.

You can pass extra querystring elements via the `options` argument as `qs`.

##### Arguments

1. options *(object)*: An object with elements to pass to the `request-promise` module.

#### Returns

*(Object)*: A bluebird promise.

#### Example

```javascript
	
	var recDon = ta.getRecentDonations();
	
	recDon.then(function(data) {
			console.log(JSON.stringify(data, null, '\t');
			/*	{
					"donations": [
						{
							"id": 12345678,
							"created_at": "2015-06-23T05:22:26Z",
							"amount": 1,
							"currency": "USD",
							"amount_label": "$1.00",
							"donator": {
								"id": "0a1b2c3d4e5f6g7h8i9j0k1l2m3o4p5q6r7s8t9u",
								"name": "TestUser1"
							},
							"message": "Hey, I appreciate your stream! Keep up the good work!"
						},
						{
							"id": 12345679
							"created_at": "2015-06-23T05:25:09Z",
							"amount": 12.5,
							"currency": "USD",
							"amount_label": "$12.50",
							"donator": {
								"id": "a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9",
								"name": "TestUser2"
							},
							"message": ""
						}
					]
				}
			*/
		}).catch(function(err) {
				console.log(JSON.stringify(err.error, null, '\t');
				/*	{
						"error": "Not found",
						"message": "User not found or invalid API key"
					}
				*/
			});
	
```

### Not Yet Supported API Endpoints

#### ta.getDonationGoal(options)

Gets the donation goal data for the authenticated user.

You can pass extra querystring elements via the `options` argument as `qs`.

##### Arguments

1. options *(object)*: An object with elements to pass to the `request-promise` module.

#### Returns

*(Object)*: A bluebird promise.

#### Example

```javascript
	
	var recDon = ta.getRecentDonations();
	
	recDon.then(function(data) {
			console.log(JSON.stringify(data, null, '\t');
			/*	{
					"hash": "0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p",
					"data": {
						"title": "Donation Goal Title",
						"percentComplete": 22.88,
						"goalCurrentAmount": "$183.00",
						"toGo": "89 days to go",
						"goalStart": "$0.00",
						"goalAmount": "$800.00",
						"settings": {
							"background_color": "#ffffff",
							"bar_color": "#B9A3E3",
							"bar_bg_color": "#6441A4",
							"text_color": "#FFFFFF",
							"bar_text_color": "#FFFFFF",
							"font": "Arial",
							"bar_thickness": "32",
							"layout": "condensed"
						}
					}
				}
			*/
		}).catch(function(err) {
				console.log(JSON.stringify(err.error, null, '\t');
				/*	{
						"error": "Not found",
						"message": "User not found or invalid API key"
					}
				*/
			});
	
```
