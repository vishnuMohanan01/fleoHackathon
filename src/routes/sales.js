const salesRouter = require('express').Router();
const createCategoryRouter = require("./subRoutes/createCategory");

// add child routes here
// salesRouter.use("/route", routerName);
salesRouter.use("/create-category", createCategoryRouter);

salesRouter.get('*', (req, res) => {
    res.send('error404');
});

module.exports = salesRouter;
