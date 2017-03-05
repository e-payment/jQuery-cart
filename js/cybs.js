// https://www.jokecamp.com/blog/examples-of-creating-base64-hashes-using-hmac-sha256-in-different-languages/

var MERCHANT_ID = 'kr950210047';
var PROFILE_ID  = '291CDD47-6036-4C1E-BB97-B5CDA504B76F';
var ACCESS_KEY  = 'f854903616a93495b4dfccbd075bad8b';
var SECRET_KEY  = '9a5d4d3a6f9845bf96372912813ff4582e71cf2482c14924b6a8a56b146d79bb5ec5b1b6ea5449229eaefaea522d1e25edd359e9c16946b691c504850cb5e9cb188383e627594e19b925de7a36ab06dcc23511ddc0754c86836feedf500332452f8bc1f455d44af5aae4dcbfe2cbec14b4b8644878ea40fab7f761cd6c9c96b1';

// DF TEST: 1snn5n9w, LIVE: k8vif92e 
var DF_ORG_ID = '1snn5n9w';

///////////////////////////////////////////////////////////////////////////////

class Cybs {

	static sign(params) {

		var message   = this._paramsToCsv(params);
		var hmac      = CryptoJS.HmacSHA256(message, SECRET_KEY);
		var signature = CryptoJS.enc.Base64.stringify(hmac);

		return signature;
	}

	static _paramsToCsv(params) {

		var fileds = params['signed_field_names'];
		console.log(fileds.split(','));
		console.log(params);

		var items = Array();
		//Object.keys(params).map(function(item) {
		fileds.split(',').map(function(item) {
			items.push(item + '=' + params[item]);
			console.log(item + '=' + params[item]);
		});

		var csv = items.join(",");
		//console.log(csv);

		return csv;
	}
}