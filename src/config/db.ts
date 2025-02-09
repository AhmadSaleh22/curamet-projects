import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'curamet',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
  })
  .catch(() => {
  });

export default sequelize;