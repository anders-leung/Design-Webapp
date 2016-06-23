var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Design Webapp' });
});

router.get('/:anything', function(req, res, next) {
  res.render('index', {title: 'Design Webapp'});
});

router.post('/', function(req, res, next) {
  res.render('index', {title: 'Design Webapp'});
});

module.exports = router;
