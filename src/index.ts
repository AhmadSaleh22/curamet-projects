import express from 'express';
// import users from './routers/users.routes.ts'; // Ensure correct import path
import db from './config/db';
import users from './routers/users.routes';

const app = express();
app.use(express.json());

// Ensure DB connection before starting the server
db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

app.use('/users', users); // Now `/users` correctly maps to `users.routes.js`

app.get('/', async (_, res) => {
  try {
    await db.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    res.status(500).send(error);
  }
});
