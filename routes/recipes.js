var recipes = require('../recipes.json');
var router = require('express').Router();

const Recipes = {
  get: function(query) {
    let { page } = query;
    let { limit } = query;
    if (!page) {
      page = 1
    }
    if (!limit) {
      limit = 3
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return recipes.slice(startIndex, endIndex);
  }
};

router.get('/:page?/:limit?', (req, res) => {
  res.status(200).json(Recipes.get(req.params));
});

module.exports = router;

