const getParent = require('express').Router();
const getParentMW = require('../../utils/getParent');

getParent.use(getParentMW);

module.exports = getParent;
