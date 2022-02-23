// const express = require("express");
// const fs = require("fs");
// // Creates an Express application. The express() function is a top-level function exported by the express module.
// const app = express();
// // adding middeleware to request
// app.use(function (req, res, next) {
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
//   let text = fs.readFileSync("./text.html", "utf-8");
//   console.log(text);
//   next();
// });
    

// // basic express routing
// app.get("/", (req, res) => {
//   res.send("ok this is express");
// });

// // listen a port
// app.listen(5000, err => {
//   if (err) throw err;
//   console.log("successfully app is running on port number 5000");
// });

// const express = require("express");
// const app = express();
// // custom middleware

// app.use((req, res, next) => {
//   if (req.url === "/shashi") {
//     console.log("my custom middleware is executing");
//   }
//   next();
// });
// app.use(express.static(__dirname + "/public"));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/text.html");
// });
// app.listen(5000, err => {
//   if (err) throw err;
//   console.log("express is running in port number 5000");
// });

const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home.handlebars");
});

app.listen(5000, err => {
  if (err) throw err;
  console.log("express is running in port number 5000");
});
