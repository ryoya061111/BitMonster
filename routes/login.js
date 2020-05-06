'use strict';
var express = require('express');
var router = express.Router();
const User = require('../models/user');
var session = require('express-session');

router.get('/', function(req, res, next) {
    res.render('login', {
      title: 'ログイン'
    });
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({
    where: {
      email: email,
      password : password
    }
  }).then((User) => {
    console.log(User.username);
    var username = User.username
    res.render('index', {
      user : User
    });
  });
});

module.exports = router;
