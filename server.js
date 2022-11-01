const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// import routes
const population = require('./routes/population');
const crypto = require('./routes/crypto');
const salary = require('./routes/salary');

// use dotenv to load environment variables from .env file
dotenv.config();

// import dependencies
app.use(cors());
app.use(express.json());

// handle root
app.get('/', (req, res) => {
	  res.sendFile(path.join(__dirname, './public/index.html'));
});

// routes
app.use('/population', population);
app.use('/crypto', crypto);
app.use('/salary', salary);

app.listen(process.env.PORT || 3500, () => {
	console.log(`Server is running on port: ${process.env.PORT || 3500}`);
});