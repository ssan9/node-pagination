var recipes = require('../recipes.json');
var router = require('express').Router();

const Recipes = {
  get: (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return recipes.slice(startIndex, endIndex);
  }
};

router.get('/', (req, res) => {
  let {query:{page=1,limit=3}} = req;
  res.status(200).json(Recipes.get(page,limit));
});

module.exports = router;

