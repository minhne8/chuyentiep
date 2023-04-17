var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('https://shorturl.at/dtxPW')
});

/* GET /stripo. */
router.get('/stripo', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('https://shorturl.at/eFLO7')
});
module.exports = router;
