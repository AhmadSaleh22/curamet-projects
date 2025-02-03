import mysql from 'mysql2';

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'curamet',
});

db.connect((err: any) => {
  if (err !== null) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Successfully connected to MySQL database');
});

export default db;