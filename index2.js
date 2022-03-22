const express = require("express");
const app = express();

app.use(middleware);
app.get("/", (req, res) => {
  res.send(`
    <a href="home">
    Home</a>
    <br>
    <a href="about">
    About</a>
    <br>
    `);
});

app.get("/home", (req, res) => {
  res.send(`<h1>welcome to home Page</h1> ${req.locals.date}`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>welcome to about Page</h1> ${req.locals.date}`);
});

function middleware(req, res, next) {
  req.locals = {
    date: new Date(),
  };
  next();
}

app.listen(3000, () => {
  console.log("Listening");
});
