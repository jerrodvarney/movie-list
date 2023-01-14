const express = require('express');
const PORT = 3000 || process.env.PORT;

// Local Database
const db = require('./db');


// Middleware
const morgan = require('morgan');
const cors = require('cors');


// Router
const router = require('./routes.js');


// Create server
const app = express();


// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// Request Handlers
app.use('/api', router);


// Serve the client files
app.use(express.static('client/dist'));


// Runs server on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})