const salesRouter = require('express').Router();
const createCategoryRouter = require("./subRoutes/createCategory");
const updateCategoryRouter = require("./subRoutes/updateCategory");

// add child routes here
// salesRouter.use("/route", routerName);
salesRouter.use("/create-category", createCategoryRouter);
salesRouter.use("/update-category", updateCategoryRouter);

salesRouter.get('*', (req, res) => {
    res.send('error404');
});

module.exports = salesRouter;
