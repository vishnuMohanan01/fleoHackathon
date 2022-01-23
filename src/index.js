const express = require("express");
const bodyParser = require('body-parser');

const routes = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.json({
        id: "aoZn4dMUtLkel3ymrPKU",
        name: "Tata Steel",
        current: 1000000,
        target: 3000000,
        progress: 33.33,
        colorCode: "Yellow",
        label: "Off track",
        child: {
            id: "sEuhZD2cVTAwsFgtoblE",
            name: "Factory",
            current: 500000,
            target: 600000,
            progress: 83.33,
            colorCode: "Green",
            label: "On track",
            child: "9fMlrjwsaqQR35mshjWh"
        }
    });
});

app.use("/sales", routes.salesRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is up !!");
});
