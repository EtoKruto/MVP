const express = require('express');
const path = require('path');
// const compression = require('compression');
require('dotenv').config({ path: path.resolve(__dirname, '../file.env') })

const app = express();
const port = process.env.S_PORT || 3001;

// Logging and parsing
// app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
const router = require("./routes.js");
// import router from './routes.js';

// Set up our routes
app.use(router);

// Serve the client files
// app.use(express.static(path.join(__dirname, '../build')));

// Set up what we are listening on
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
