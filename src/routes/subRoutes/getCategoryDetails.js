const getCategoryDetails = require('express').Router();
const getCategoryDetailsMW = require('../../utils/getCategoryDetails');

getCategoryDetails.use(getCategoryDetailsMW);

module.exports = getCategoryDetails;
