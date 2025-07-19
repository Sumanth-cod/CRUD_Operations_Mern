const express=require('express');
const router=express.Router();
const createStudentRouter = require("../Controllers/createStudent");




// Route to create a new student
router.route("/createstudent")
.post(createStudentRouter);
module.exports = router;