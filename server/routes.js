var controller = require('./controller/index.js');
var express = require('express')
const router = express.Router();

router.get('/restaurants/tags', controller.restaurants.getTags);

router.get('/restaurants', controller.restaurants.getRestaurants);

module.exports = router;

