const express = require("express");
const routes = require("./server/route")
const bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

routes(app);

var PORT = process.env.PORT  || 8000
app.listen(PORT, () => console.log(`connected ${PORT}`));