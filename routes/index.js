var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  models.User.create({
    first_name : req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    password : req.body.password
  }).then(function(users){

  })
})

module.exports = router;
