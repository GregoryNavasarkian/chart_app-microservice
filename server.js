const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const dotenv = require('dotenv');

// use dotenv to load environment variables from .env file
dotenv.config();

// import dependencies
app.use(cors());
app.use(express.json());

// import routes
app.get('/', (req, res) => {
	  res.json('Hello World!');
});


app.listen(process.env.PORT || 3500, () => {
	console.log(`Server is running on port: ${process.env.PORT || 3500}`);
});