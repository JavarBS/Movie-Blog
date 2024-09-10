import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs")
});

app.post("/blogs", (req, res) => {
    const movieTitle = req.body["movieName"];
    const movieReview = req.body["yourThoughts"];

    res.render("blogs.ejs", {
        title: movieTitle,
        review: movieReview,
    });
    
  console.log(req.body);
  
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });