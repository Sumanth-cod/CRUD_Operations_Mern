const express = require("express");
const app = express();
const port = 3000;
const createStudentRoute = require("./routes/createStudentrouter");
const connectDB = require("./Config/databaseconfiguration");
const readstudentRoutes = require("./routes/readStudentroutes");
const deleteStudentRoute = require("./routes/deleteStudentRoute");
const updateStudentRoute = require("./routes/updateStudent");
connectDB();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use("/api/students", updateStudentRoute);
app.use("/api/students", readstudentRoutes);
app.use("/api/students", createStudentRoute);
app.use("/api/students", deleteStudentRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
