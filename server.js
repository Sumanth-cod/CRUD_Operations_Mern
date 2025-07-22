const express = require("express");
const app = express();
const port = 3000;
const createStudentRoute = require("./routes/createStudentrouter");
const connectDB = require("./Config/databaseconfiguration");
const readstudentRoutes = require("./routes/readStudentroutes");
const deleteStudentRoute = require("./routes/deleteStudentRoute");
const singleStudentRoute = require("./routes/singlestudent");
const updateStudentRoute = require("./routes/updateStudent");

const ejs=require("ejs");
app.set('view engine','ejs');




connectDB();
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.use(express.json());
app.use("/api/students", updateStudentRoute);
app.use("/api/students", readstudentRoutes);
app.use("/api/students", createStudentRoute);
app.use("/api/students", deleteStudentRoute);
app.use("/api/students",singleStudentRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



//server side rendering

// app.get("/",(req,res)=>{
//     res.send("<h1> sumanthkomirirsetty</h1>");

// })
//client side rendering
// app.get("/",(req,res)=>{
//     res.json({message:"sumanth komirisetty"});

// })


// EJS

app.get('/ejs',(req,res)=>{
    res.render('sample');
})