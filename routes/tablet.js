var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Tablet', { title: 'Search Results Tablet' });
});

module.exports = router;
