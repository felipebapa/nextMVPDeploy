// test-db.js
const { connectDatabase } = require('./db.js');

async function testConnection() {
  try {
    const connection = await connectDatabase();
    console.log('Conexión a la base de datos establecida correctamente.');
    // Realiza otras operaciones con la conexión si lo deseas
    // Por ejemplo, ejecuta consultas SQL
    await connection.query('SELECT * FROM `mvp1');
    // Cierra la conexión después de usarla
    await connection.end();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

testConnection();
