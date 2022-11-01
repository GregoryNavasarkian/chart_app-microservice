// import dependencies
const express = require('express');
const router = express.Router();
const axios = require("axios");

const salary = require('../Data/salary');

// gets the salary sample data. Ex. http://localhost:3500/salary
router.route("/").get((req, res) => {
	res.json(salary);
});

module.exports = router;