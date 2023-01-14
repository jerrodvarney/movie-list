const controller = require('./controllers');
const router = require('express').Router();

// Connects controller methods to their corresponding routes
router.get('/movies', controller.getAll);

router.post('/update', controller.addMovie);

router.post('/watched', controller.updateWatched);

module.exports = router;