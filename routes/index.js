var express = require('express');
var router = express.Router();

const { router: recipeRouter} = require('./recipes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

app.use('/recipes', recipeRouter);

module.exports = router;
