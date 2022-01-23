const updateCategory = require('express').Router();
const updateCategoryMW = require('../../utils/updateCategory');

updateCategory.use(updateCategoryMW);

module.exports = updateCategory;
