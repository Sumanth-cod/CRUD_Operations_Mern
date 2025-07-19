const express=require('express');
const router=express.Router();

const updateStudentRouter=require("../Controllers/UpdateStudent");

router.route("/updateStudent/:id")
    .put(updateStudentRouter);
module.exports=router;