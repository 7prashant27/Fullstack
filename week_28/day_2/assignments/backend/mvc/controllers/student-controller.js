const Students = require("../models/Student");

//get all student data
const getStudents = (req, res) => {
  Students.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(403).json("Error: " + err));
};

//add student data
const addStudent = (req, res) => {
  let query = req.body.email;
  Students.findOne({ email: query }).then((data) => {
    if (data) {
      res.status(403).json({ message: "preson already exist" });
      return;
    }
  });

  if (req.body.name === "" || !req.body.name) {
    res.status(403).json({ message: "name can't be empty" });
    return;
  } else if (req.body.blood_group === "" || !req.body.blood_group) {
    res.status(403).json({ message: "blood_group can't be empty" });
    return;
  } else if (req.body.email === "" || !req.body.email) {
    res.status(403).json({ message: "email can't be empty" });
    return;
  } else if (req.body.city === "" || !req.body.city) {
    res.status(403).json({ message: "city can't be empty" });
    return;
  } else if (req.body.image_link === "" || !req.body.image_link) {
    res.status(403).json({ message: "image_link can't be empty" });
    return;
  } else if (req.body.gender === "" || !req.body.gender) {
    res.status(403).json({ message: "gender can't be empty" });
    return;
  } else {
    const data = new Students({
      name: req.body.name,
      blood_group: req.body.blood_group,
      email: req.body.email,
      city: req.body.city,
      image_link: req.body.image_link,
      gender: req.body.gender,
    });

    data
      .save()
      .then(() =>
        res.status(200).json({
          status: "Success",
          message: "New person has been added to the database",
        })
      )
      .catch((err) => res.status(400).json({ status: "Failed", message: err }));
  }
};

//get single student data
const getSingleStudentData = (req, res) => {
  let query = req.params.email;

  Students.findOne({ email: query })
    .then((student) => {
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: "No Such person Found" });
      }
    })
    .catch((err) =>
      res.status(404).json({ message: "No Such person Found", error: err })
    );
};

//edit student data
const editStudent = (req, res) => {
  if (req.is("application/json")) {
    Students.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          _id: req.body._id,
          id: req.body.id,
          name: req.body.name,
          blood_group: req.body["blood_group"],
          email: req.body.email,
          city: req.body.city,
          image_link: req.body["image_link"],
          gender: req.body.gender,
        },
      }
    )
      .then(() => res.json("The user was updated successfully"))
      .catch((err) =>
        res.status(404).json("There was an error while updating the user")
      );
  } else {
    res.status(404).json({
      error: true,
      message: "There was an error while updating the student details",
    });
  }
};

//delete student data
const deleteStudent = (req, res) => {
  let query = req.params.email;
  Students.findOne({ email: query })
    .then((student) => {
      Students.findByIdAndDelete(student.id).then(() =>
        res.status(200).json({
          status: "Success",
          message: "person has been removed from the database",
        })
      );
    })
    .catch((err) => res.status(404).json({ message: "No Such person Found" }));
};

module.exports = {
  getStudents,
  addStudent,
  getSingleStudentData,
  editStudent,
  deleteStudent,
};
