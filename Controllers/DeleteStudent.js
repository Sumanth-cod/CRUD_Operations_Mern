const student=require('../models/Studentmodel');
const deleteStudent=async(req,res)=>{
    try{
        const deleteStudent=await student.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
            res.status(404).json({message:"Student not found"});

        }else{
            res.status(200).json({message:"Student deleted successfully"});
        }
    }catch(err){
        res.status(500).json({error:"Failed to delete student"});
    }

}

module.exports=deleteStudent;