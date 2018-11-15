'use strict';
var express = require('express');
var router = express.Router();

router.get('/:name/:expire/', function(req, res){
	require('../controllers/jwtController').getJWT(req, res);
});

router.get('/:name/:expire/:sde', function(req, res){
	require('../controllers/jwtController').getJWTWithSDE(req, res);
});

module.exports = router;