const salesRouter = require('express').Router();
const createCategoryRouter = require("./subRoutes/createCategory");
const updateCategoryRouter = require("./subRoutes/updateCategory");
const getCategoryDetails = require("./subRoutes/getCategoryDetails");
const getParent = require("./subRoutes/getParent");

// add child routes here
// salesRouter.use("/route", routerName);
salesRouter.use("/create-category", createCategoryRouter);
salesRouter.use("/update-category", updateCategoryRouter);
salesRouter.use("/get-category", getCategoryDetails);
salesRouter.use("/get-parent", getParent);

salesRouter.get('*', (req, res) => {
    res.send('error404');
});

module.exports = salesRouter;
