var recipes = require('../recipes.json');
var router = require('express').Router();

const Recipes = {
  get: function() {
    return Object.keys(this.items).map(key => this.item[key]);
  }
}

router.get('/', async (req, res) => {
  const recipes = await Recipes.get();
  res.status(200).json(recipes);
});

module.exports = router;

