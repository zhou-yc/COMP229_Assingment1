/*
  File Name: style.css
  Student's Name: Yuchen Zhou
  Student ID: 301188341
  Date: 2022/9/30
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/project', function(req, res, next) {
  res.render('project');
});

router.get('/service', function(req, res, next) {
  res.render('service');
});

module.exports = router;
