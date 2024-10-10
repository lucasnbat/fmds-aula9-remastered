import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    console.log('Connected. Everything working!');
    connection.release(); // Libera a conexão de volta ao pool
});


export default pool