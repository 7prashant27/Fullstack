const express = require("express");
const router = express.Router();

const {
  addStudent,
  getSingleStudentData,
  editStudent,
  deleteStudent,
  loginUser,
  loginValidator,
  profileUpload,
} = require("../controllers/student-controller");

router.get("/api/students/:email", getSingleStudentData);
router.post("/api/students",profileUpload.single("image_link"), addStudent);
router.post("/api/students/:email", editStudent);
router.delete("/api/students/:email", deleteStudent);

router.post("/api/user/login",loginValidator, loginUser)

module.exports = router;
