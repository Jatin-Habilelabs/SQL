const express = require("express");
const app = express();
require("./db/connection");
app.use(express.json());
app.use(require('./routes/route'))

const port = 8081;

const middleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

app.get("/get", (req, res) => {
  console.log(">serverWithDatabase | [app.js] > #28 | check : ");
  res.send("hello world from the server");
});


app.listen(port, () => {
  console.log("server is running on port :", port);
});
