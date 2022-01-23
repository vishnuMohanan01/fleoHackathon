const createCategory = require('express').Router();
const createCategoryMW = require('../../utils/createCategory');

createCategory.use(createCategoryMW);

module.exports = createCategory;
