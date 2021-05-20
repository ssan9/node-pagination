var recipes = require('../recipes.json');
var router = require('express').Router();

const Recipes = {
  get: async function() {
    const res = await Object.keys(recipesList).map(key => recipesList[key]);
    return res;
  }
}

router.get('/', async (req, res) => {
  const recipes = await Recipes.get();
  res.status(200).json(recipes);
});


module.exports = router;

