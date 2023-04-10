var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/:name/:age/:sex', function(req, res, next) {
  const { name, age, sex } = req.params;
  const user = {
    name,
    age,
    sex
  };
  res.json(user);
});

module.exports = router;
