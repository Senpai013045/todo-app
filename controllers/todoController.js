//no use on mongo //var data = [];

module.exports = function (app) {
  var mongoose = require("mongoose");
  mongoose.connect(
    "mongodb+srv://test:testtest@practicelab-jdkpd.mongodb.net/practiceLab?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  var todoSchema = new mongoose.Schema({
    item: String,
  });
  var Todo = mongoose.model("Todo", todoSchema);

  /*  //this was for practice only
  var itemOne = Todo({ item: "practice mongodb" }).save((error) => {
    if (error) throw error;
    console.log("item saved");
  });*/
  var bodyParser = require("body-parser");
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    //get data from mongo db and pass it to the view
    //putting empty returns all items
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render("todo", { data });
    });
  });
  app.post("/", (req, res) => {
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.end(JSON.stringify(data));
    });
  });
  app.delete("/:item", (req, res) => {
    //delete the requested item from mongo db
    Todo.find({ item: req.params.item.replace("-", " ") }).remove(
      (err, data) => {
        if (err) throw err;
        res.end(JSON.stringify(data));
      }
    );
    // let delReq = req.params.item.replace("-", " ");
    // return (data = data.filter((todo) => todo.item != delReq));
  });
};
//the todo controller
