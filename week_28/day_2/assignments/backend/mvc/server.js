const express = require("express");
const mongoose = require("mongoose");
const initialData = require("./students.json");

const Students = require("./models/Student");
const studentRoute = require("./routes/Students");
const app = express();

mongoose.connect(
  "mongodb://localhost/mvc",
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connection to DB failed");
    } else {
      console.log("Database is sucessfully connected");
      Students.find()
        .then((data) => {
          if (data.length === 0) {
            Students.insertMany(initialData)
              .then(() => console.log("Initial Data is Added to the database"))
              .catch((err) => console.log("Error: " + err));
          } else {
            console.log("initial data is allready present");
          }
        })
        .catch((err) => console.log("Error: " + err));
    }
  }
);

//parent route
app.use("/", studentRoute);

app.get("/api/students", paginatedResults(Students), (req, res) => {
  res.json(res.pagination);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.current = await model.find().limit(limit).skip(startIndex).exec();
      res.pagination = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

app.listen(5000, () => {
  console.log("The server is up and running");
});
