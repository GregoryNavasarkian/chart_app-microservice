// import dependencies
const express = require('express');
const router = express.Router();
const axios = require("axios");

// gets the price of btc and eth. Ex. http://localhost:3500/crypto
router.route("/").get((req, res) => {
    const options = {
		method: 'GET',
		url: 'https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/',
		params: {start: '0', limit: '2'},
		headers: {
		  'X-RapidAPI-Key': 'cfe41879c5msh3ac43794f053255p1327ecjsn0aa5e3a5f2c1',
		  'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com'
		}
	  };
	  
	axios.request(options)
	    .then(function (response) {
			const btc = response.data.data[0];
			const eth = response.data.data[1];
		    res.json(
				[
					{
						name: btc.name,
						price_usd: btc.price_usd,
						symbol: btc.symbol
					},
					{
						name: eth.name,
						price_usd: eth.price_usd,
						symbol: eth.symbol
					}
				]
			);
	    })
	    .catch(function (error) {
		    console.error(error);
	    });
});

module.exports = router;