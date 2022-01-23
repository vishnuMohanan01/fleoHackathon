const deleteCategory = require('express').Router();
const deleteCategoryMW = require('../../utils/deleteCategory');

deleteCategory.use(deleteCategoryMW);

module.exports = deleteCategory;
