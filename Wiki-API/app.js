const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Article = require("./models/articles");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.route("/articles")
    .get((req, res) => {
        Article.find((err, foundArticles) => {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post((req, res) => {
        const newArticle = new Article({
          title: req.body.title,
          content: req.body.content,
        });

        newArticle.save((err) => {
            if (!err) {
                res.send("Successfully added to DB");
            } else {
                res.send("Fail!! " + err);
            }
        });
    })

    .delete((req, res) => {
        Article.deleteMany((err) => {
            if (!err) {
                res.send("Successfully deleted all articles in DB");
            } else {
                res.send("Fail!! " + err);
            }
        });
    });

app.route("/articles/:articlesName")
    .get((req, res)=>{
        Article.findOne({title: req.params.articlesName}, (err, foundArticle)=>{
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("Not found this Article");
            }
        });
    })

    .put((req,res)=>{
        Article.update(
            {title: req.params.articlesName},
            {title: req.body.title, content: req.body.content},
            (err)=>{
                if (!err) {
                    res.send("Successfully update articles!!")
                }else{
                    res.send(err);
                }
            }
        );
    })
    
    .patch((req,res)=>{
        Article.update(
            {title: req.params.articlesName},
            {$set: req.body},
            (err)=>{
                if (!err) {
                    res.send("Successfully update articles!!");
                } else {
                    res.send(err);
                }
            }
        );
    })
    .delete((req,res)=>{
        Article.deleteOne(
            {title: req.params.articlesName},
            (err)=>{
                if (!err) {
                    res.send("Successfully delete articles!!");
                } else {
                    res.send(err);
                }
            }
        );
    });




//////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
