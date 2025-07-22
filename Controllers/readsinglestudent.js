const student=require('../models/Studentmodel');
const singlestudent=async(req,res)=>{

    try{
        const singlestudent=await student.findById(req.params.id);
        if (!singlestudent){
            res.status(404).json({message:"student not found"});
        }else{
            res.status(200).json({student:singlestudent});
        }
        }
        catch(err){
            res.status(500).json({error:"failed to fetch student data"});
        }
    }

module.exports=singlestudent;