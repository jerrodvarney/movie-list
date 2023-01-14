const db = require('../db');

module.exports = {

  getAll: (callback) => {
    const queryString = 'SELECT * FROM movies';
    db.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }
      callback(results);
    });
  },

  addMovie: (movieObj, callback) => {

  },

  updateWatched: (movieObj, callback) => {

  }

};
