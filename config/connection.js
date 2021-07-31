import Sequelize from 'sequelize';
// require('dotenv').config();
import dotenv from "dotenv";
dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_DATABASE,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    database: "employees.db"
  }
);

export default sequelize