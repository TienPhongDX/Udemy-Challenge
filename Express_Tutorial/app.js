const express = require("express");
const session = require("express-session");
// const cookiesParser = require("cookies-parser");

const app = express();
const store = new session.MemoryStore();

const usersRoute = require("./router/users");
const postsRoute = require("./router/posts");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "some secret",
    cookie: {maxAge: 30000},
    saveUninitialized: false,
    store
}));
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  });

app.get("/", (req, res) => {
  res.send({
    msg: "Hello",
    user: {},
  });
});

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
