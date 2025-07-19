const express = require("express");
const router = express.Router();
const readtStudentRouter = require("../Controllers/readStudent");

// router.get("/", studentController.getAllStudents);
router.route("/readstudents")
    .get(readtStudentRouter);
module.exports = router;
