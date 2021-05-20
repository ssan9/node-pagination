var recipes = require('../recipes.json');
var router = require('express').Router();

const Recipes = {
  get: function() {
    const res = Object.keys(recipesList).map(key => recipesList[key]);
    return res;
  }
}

router.get('/', (req, res) => {
  const recipes = Recipes.get();
  res.status(200).json(recipes);
});


module.exports = router;

