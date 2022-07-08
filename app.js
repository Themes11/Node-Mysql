const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3000;
const bodyparser = require("body-parser");
const student = require("./routes/student/student")

app.use(bodyparser.urlencoded({extended: false}))

app.use(express.json())

app.use("/", student);
app.listen(PORT, () => {
    console.log("Server is connected...")
});


