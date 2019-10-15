var express = require('express');
var router = express.Router();

var User = require('../models/user.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  //限制不反悔_id和__v字段
  User.find({},{_id:0,__v:0},function(err, docs) {
  	if(err) {
  		res.send('Error');
  		return next();
  	}
  	res.json(docs);
  })
});

router.get('/test',function(req,res,next) {
	var user = User({
		username:"admin",
		password:"admin"
	})

	user.save(function(err) {
		if(err) {
			res.send('Error');
			return next();
		}

		User.find({},function(err,docs) {
			if(err) {
				res.send('Error');
				return next();
			}

			res.json(docs);
		})
	})
});

module.exports = router;
