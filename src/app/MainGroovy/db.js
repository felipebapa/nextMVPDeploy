//db.js
const mysql = require("mysql2/promise");

let connection = null;

async function connectDatabase() {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: "sql10.freesqldatabase.com",
        database: "sql10706476",
        user: "sql10706476",
        password: "xBPRsu6U7M",
        table: "mvp1",
      });

      console.log("Conexión a la base de datos establecida correctamente.");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error; // Propagar el error para que sea manejado por el código que llama a esta función
    }
  }
  return connection;
}

module.exports = {
  connectDatabase
};
