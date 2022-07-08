const  express = require("express");
const router = express.Router();
const mysql = require("mysql");
const { getStudent, postStudent, updateStudent, deleteStudent } = require("../controller/stud");

router.route("/").get(getStudent).post(postStudent).put(updateStudent).delete(deleteStudent);

module.exports = router