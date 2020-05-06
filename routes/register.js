var express = require('express');
var router = express.Router();
var moment = require('moment');
const uuid = require('uuid');
const User = require('../models/user');


router.get('/', function(req, res, next) {
  res.render('register', {
    title: '新規会員登録'
  });
});

router.post('/', function(req, res, next) {
  var userName = req.body.user_name;
  var email = req.body.email;
  var password = req.body.password;

  User.create({
    username: userName,
    email: email,
    password: password,
  }).then((User) => {
    res.redirect('/login');
  });

});

module.exports = router;

