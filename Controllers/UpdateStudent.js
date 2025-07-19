const student=require('../models/Studentmodel');
const updateStudent=async(req,res)=>{
    const {id} = req.params;
    const {name, Rollnumber, email, password} = req.body;

    try {
        const updatedStudent = await student.findByIdAndUpdate(id, {
            name,
            Rollnumber,
            email,
            password
        }, {new: true});

        if (!updatedStudent) {
            return res.status(404).json({message: "Student not found"});
        }

        res.status(200).json({message: "Student updated successfully", student: updatedStudent});
    } catch (err) {
        res.status(500).json({error: "Failed to update student"});
    }


}

module.exports=updateStudent;