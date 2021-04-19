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
      let usersData = JSON.parse(paylad);
      let userInputData = JSON.parse(req.body);
      let userId = undefined;
      for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].Login == userInputData.Login && usersData[i].Password == userInputData.Password) {
          userId = usersData[i].id;
          res.status(200).send(`${userId}`);
        }
      }
      if (!userId) {
        res.status(401).send("Not Found");
      }
    },
  });
} );

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
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});