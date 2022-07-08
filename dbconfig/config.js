const mysql = require("mysql");
const { dbkeys } = require("../secret");

const pool = mysql.createPool({
    connectionLimit: dbkeys.connectionLimit,
    host:dbkeys.host,
    user:dbkeys.user,
    password:dbkeys.password,
    database:dbkeys.database,
    port:dbkeys.port
})
module.exports = pool;