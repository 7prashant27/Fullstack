const express = require("express");
const router = express.Router();

const {
  getStudents,
  addStudent,
  getSingleStudentData,
  editStudent,
  deleteStudent,
} = require("../controllers/student-controller");

router.get("/api/students/:email", getSingleStudentData);
router.post("/api/students", addStudent);
router.post("/api/students/:email", editStudent);
router.delete("/api/students/:email", deleteStudent);

module.exports = router;
