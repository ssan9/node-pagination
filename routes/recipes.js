var recipes = require('../recipes.json');
var router = require('express').Router();

const Recipes = {
  get: function() {
    return Object.keys(this.items).map(key => this.item[key]);
  }
}

router.get('/', (req, res) => {
  res.status(200).json(Recipes.get());
});

module.exports = router;

