const { Router } = require("express");

const router = Router();

const posts = [
  { title: "This is first post" },
  { title: "This is second post" },
];

router.get("/", (req, res) => {
  console.log(req.query);
  const { title } = req.query;
  if (title) {
    const post = posts.find((post) => post.title === title);
    if (post) res.status(200).send(post);
    else res.status(404).send("Not found!");
  }
  res.status(200).send(posts);
});

function validateAuthToken(req, res, next) {
  console.log("Inside Validate Auth Token");
  const { authorrization } = req.headers;
  if (authorrization && authorrization === "123") {
    next();
  } else {
    res.status(403).send({ msg: "Forbidden. Incorrect Credentials" });
  }
}

router.post("/", validateAuthToken, (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).send(post);
});

function validateCookie(req, res, next) {
  const { cookies } = req;
  if ("session_id" in cookies) {
    console.log("Session ID Exist!");
    if (cookies.session_id === "1234567") next();
    else res.status(403).send({ msg: "Not Authenticated" });
  } else res.status(403).send({ msg: "Not Authenticated" });
}

router.get("/signin", (req, res) => {
  res.cookie("session_id", "123456");
  res.status(200).json({ msg: "Logged In." });
});

router.get("/protected", validateCookie, (req, res) => {
  res.status(200).json({ msg: "You are Authorized!" });
});

router.post("/login", (req, res) => {
  console.log(req.sessionID);
  const { username, password } = req.body;
  if (username && password) {
    if (req.session.authenticated) {
      res.json(req.session);
    } else {
      if (password === "123") {
        req.session.authenticated = true;
        req.session.user = { username, password };
        res.json(req.session);
      } else {
        res.status(403).json({ msg: "Bad Credentials" });
      }
    }
  } else res.status(403).json({ msg: "Bad Credentials" });
});

module.exports = router;
