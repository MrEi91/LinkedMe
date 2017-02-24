var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/home', function(req, res, next) {
  res.render('dummy_ejs_for_success_login')
});

router.get('/get', function(req, res, next) {
  models.User.findAll().then((users) =>{
    res.send(users)
  })
});

router.post('/login',function(req,res,next){

  models.User.findOne({
    where: {email:req.body.email}
  }).then((data)=>{

    if (!data) {
      res.send({data: [], success: false, message: "Login failed"})
    }else{
      req.session.login = true
      res.setHeader('Content-Type', 'application/json');
      res.send({data: data, success: true, message: "login success"})
    }
  })

})



router.post('/add', function(req, res){
  models.User.findOne({where: {
    email:req.body.email
  }
}).then((data) => {
    if(!data) {
      models.User.create({
        first_name : req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        hashPassword : req.body.password
      }).then(function(users){
        res.send(users)
      })
    } else {
      res.send('email geus aya')
    }
  })
})

module.exports = router;
