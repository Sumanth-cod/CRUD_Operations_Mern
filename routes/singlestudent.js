const express=require('express');
const router=express.Router();
const singleStudentrRouter=require('../Controllers/readsinglestudent');
router.route('/singlestudent/:id')
    .get(singleStudentrRouter);
module.exports=router;