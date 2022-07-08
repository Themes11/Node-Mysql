const pool = require("../../dbconfig/config");
var sql = "SELECT * FROM new_table"
exports.getStudent = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log("Connection successful")

        connection.query(sql, ((err, rows) => {
            if(err) throw err;
            res.send(rows)
        }))
    })
}
exports.postStudent = ((req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Student Posted")

        var {ID, Name, Department} = req.body

        var sql = "CALL post(?, ?, ?);"

        connection.query(sql, [ID, Name, Department], (err, rows) => {
            if(err) throw err;
            res.send('New Student added')
        })
    })
})
exports.updateStudent = ((req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Student Posted")

        var {ID, Name, Department} = req.body

        var sql = "CALL post(?, ?, ?);"

        connection.query(sql, [ID, Name, Department], (err, rows) => {
            if(err) throw err;
            res.send(`Student with ID: ${ID} has been updated`)
        })
    })
})
exports.deleteStudent = ((req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Student Posted")

        var {ID} = req.body

        var sql = "DELETE FROM new_table WHERE ID = ?"

        connection.query(sql, [ID], (err, rows) => {
            if(err) throw err;
            res.send(`Student with ID: ${ID} has been deleted`)
        })
    })
})