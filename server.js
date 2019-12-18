const express = require("express");
const path = require("path");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/api/projects", (req, res) => {
  const projects = [
    // Array of js objects goes here which can be fetched from database.
    //Schema 
    //{title: String, type:String, link:String, desc: String, time:String, used:[String]}
  ];

  res.json(projects);
});

//Serve static if in production

if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
