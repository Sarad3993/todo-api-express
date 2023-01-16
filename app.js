const express = require("express");
const app = express();

const tasks = require('./routes/tasks')


// middleware 
app.use(express.json())


app.use('/',tasks)








app.listen(3000, "localhost", (err) => {
  if (!err) {
    console.log("Server connected to port 3000");
  } else {
    console.log("Server error");
  }
});
