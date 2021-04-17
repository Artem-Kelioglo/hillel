const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

var bodyParser = require("body-parser");
const {
  url
} = require("inspector");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.text());
app.use(
  bodyParser.json({
    type: "application/json",
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/form", (req, res) => {
  read({
    url: "./users/users.json",
    callback: (error, paylad) => {
      let a = JSON.parse(paylad);
      let b = JSON.parse(req.body);
      let filId = undefined;
      for (let i = 0; i < a.length; i++) {
        if (a[i].Login == b.Login && a[i].Password == b.Password) {
          filId = a[i].id;
          res.status(200).send(`${filId}`);
        }
      }
      if (!filId) {
        res.status(401).send("Not Found");
      }
    },
  });
});

const read = ({
  url,
  callback
}) => fs.readFile(url, "utf-8", callback);

app.get('/goods/:id', function (req, res) {
  const id = req.params.id;
  read({
    url: `./goods/${id}.json`,
    callback: (error, payload) => {
      res.status(200).send(JSON.parse(payload));
    }
  })
  // fs.readFile(`./goods/${id}.json`, "utf-8", function (error, payload) {
  //   res.send(payload);
  // });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});