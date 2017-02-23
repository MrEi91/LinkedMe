var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/get', function(req, res, next) {
  models.User.findAll().then((users) =>{
    res.send(users)
  })
});

router.post('/add', function(req, res){
  models.User.findOne({where: {
    email:req.body.email
  }
}).then((data) => {
  console.log(data);
    if(!data) {
      models.User.create({
        first_name : req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email
      }).then(function(users){
        res.send(users)
      })
    } else {
      res.send('email geus aya')
    }
  })
})

module.exports = router;
