import mysql from "mysql2/promise";

const pool = mysql.createPool({

    database: "terrativamvp",
    host: "localhost",
    password: "sandax",
    user: "root",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0


 });

export default pool;