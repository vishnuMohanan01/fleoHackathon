const express = require("express");
const bodyParser = require('body-parser');

const routes = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/sales", routes.salesRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is up !!");
});
