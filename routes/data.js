/**
 * Created by joelmiller on 1/7/16.
 */

var express = require('express');
var balance = require('../modules/format');

var router = express.Router();

router.use(function timeLog(request, response, next){
	console.log('Time: ', Date.now());
	next();
});

router.get('/data', function(request, response){
	var returnResponse = balance.response() + balance.randomAmount();
	response.send(returnResponse);
});

module.exports = router;


