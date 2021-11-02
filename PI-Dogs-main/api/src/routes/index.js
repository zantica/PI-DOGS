const router = require('express').Router();
const dogsRoute = require('./dogs')
const temperamentRoute = require('./temperaments')

router.use('/', dogsRoute)
router.use('/', temperamentRoute)

module.exports = router;
