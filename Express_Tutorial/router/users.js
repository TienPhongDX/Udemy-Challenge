const { Router } = require("express");

const router = Router();

const users = [
  { name: "Phong", age: 20 },
  { name: "Ý", age: 20 },
  { name: "Thuy", age: 46 },
  { name: "Phat", age: 48 },
  { name: "Thoi", age: 12 },
];

router.use((req, res, next) => {
  console.log("Request made to /USERS ROUTE");
  next();
});

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send("Created User");
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  const user = users.find((user) => user.name === name);
  if (user) res.status(200).send(user);
  else res.status(404).send("Not found!");
});

module.exports = router;
