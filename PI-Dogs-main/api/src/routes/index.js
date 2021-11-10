const router = require('express').Router();
const dogsRoute = require('./dogs')
const temperamentRoute = require('./temperaments')

router.use('/dogs', dogsRoute)
router.use('/temperament', temperamentRoute)

module.exports = router;
