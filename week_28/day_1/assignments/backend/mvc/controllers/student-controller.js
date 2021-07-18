const { body, validationResult } = require("express-validator")
const Students = require("../models/Student");
const Users = require("../models/Users");
const multer = require("multer")
const path = require("path")

//get all student data
const getStudents = (req, res) => {
  Students.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(403).json("Error: " + err));
};

//add student data
const storage = multer.diskStorage({
  destination: function (req ,file , cb){
    cb(null,path.join(__dirname,"../uploads"))
  },
  filename: function (req,file ,cb) {
    cb(null,new Date().toISOString() + file.originalname);
  },
})

const fileFilter = (req,file,cb) => {
  if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null,type);
  } 
  else {
    cb(null,false);
  }
};

const profileUpload = multer({
    storage: storage,
    limits:{
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter:fileFilter,
});

const addStudent = (req, res) => {
  let query = req.body.email;
  Students.findOne({ email: query }).then((data) => {
    if (data) {
      res.status(403).json({ message: "preson already exist" });
      return;
    }
  });

  if (req.body.name === "" || !req.body.name) {
    res.status(400).json({ message: "name can't be empty" });
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
  } else if (req.body.file.path === "" || !req.body.file.path) {
    res.status(403).json({ message: "Plz select a profile picture" });
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
      image_link: req.body.file.path,
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

  let query1 = req.body.email
  let query2 = req.params.email

  if (query1 === query2) {
    Students.findOne({ email: query1 }).then(data => {
      data.name = req.body.name
        data.blood_group = req.body.blood_group,
        data.city = req.body.city
      data.image_link = req.body.image_link
      data.gender = req.body.gender
      data.save().then(() => res.status(200).json({ status: "Success", message: "Student data updated!" })).catch(err => res.status(403).json({ message: "something went wrong" }))
    }).catch(err => res.status(403).json({ message: "something went wrong", q: err }))
  }
  else {
    res.status(403).json({ message: "Cannot change email" });
    return
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

let  loginValidator = [body("username").isEmail(),body("password").isLength({min:5})]
const loginUser = (req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: erroes.array() })
  }
}

module.exports = {
  getStudents,
  addStudent,
  getSingleStudentData,
  editStudent,
  deleteStudent,
  loginUser,
  loginValidator,
  profileUpload
};
