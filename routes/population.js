// import dependencies
const express = require('express');
const router = express.Router();
const axios = require("axios");

// gets the population of the entire world. Ex. http://localhost:3500/population/world
router.route("/world").get((req, res) => {
    const options = {
        method: 'GET',
        url: 'https://get-population.p.rapidapi.com/population',
        headers: {
          'X-RapidAPI-Key': 'cfe41879c5msh3ac43794f053255p1327ecjsn0aa5e3a5f2c1',
          'X-RapidAPI-Host': 'get-population.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });
});

// gets the population of a specific country. Ex. http://localhost:3500/population/country/Canada
router.route("/country/:id").get((req, res) => {
    const options = {
        method: 'GET',
        url: 'https://world-population.p.rapidapi.com/population',
        params: {country_name: req.params.id},
        headers: {
          'X-RapidAPI-Key': 'cfe41879c5msh3ac43794f053255p1327ecjsn0aa5e3a5f2c1',
          'X-RapidAPI-Host': 'world-population.p.rapidapi.com'
        }
      };
      
    axios.request(options)
        .then(function (response) {
            res.json(response.data.body);
        })
        .catch(function (error) {
            console.error(error);
        });
});

module.exports = router;