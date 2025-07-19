const express=require('express');
const router=express.Router();
const deleteStudentRouter=require("../Controllers/DeleteStudent");
router.route("/deleteStudent/:id")
    .delete(deleteStudentRouter);
module.exports=router;