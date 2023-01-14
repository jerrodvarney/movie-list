// Contains functions for interacting with the database.
const models = require('../models');


const reqHandler = {

  getAll: (req, res) => {
    models.getAll((movieData) => {
      res.statusCode = 200;
      res.end(JSON.stringify(movieData));
    })
  },

  addMovie: (req, res) => {

  },

  updateWatched: (req, res) => {

  }

};

module.exports = reqHandler;
