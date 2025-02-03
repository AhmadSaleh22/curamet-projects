import express from 'express';
const app = express();
import db from './config/db';

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  db.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error querying database');
    } else {
      res.send('Hello World');
    }
  });
});
