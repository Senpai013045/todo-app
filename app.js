var express = require("express");
var app = express();
var todoController = require("./controllers/todoController");
app.set("view engine", "ejs");
app.use(express.static("public"));
todoController(app);
app.listen(process.env.PORT||8080);
console.log("now listening to port 8080");
//my server file
