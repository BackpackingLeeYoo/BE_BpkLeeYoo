import dotenv from "dotenv";
import { Development } from "./type";
dotenv.config();

const { DB_URL } = process.env;

const development: Development = {
  db: DB_URL!,
};

// const test = {
//   username: DATABASE_NAME,
//   password: DATABASE_PASSWORD,
//   database: DATABASE_USE,
//   host: DATABASE_HOST,
//   dialect: DATABASE_DIALECT,
// };

// const production = {
//   username: DATABASE_NAME,
//   password: DATABASE_PASSWORD,
//   database: DATABASE_USE,
//   host: DATABASE_HOST,
//   dialect: DATABASE_DIALECT,
// };

export { development };
