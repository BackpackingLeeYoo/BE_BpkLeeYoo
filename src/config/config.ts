import dotenv from "dotenv";
dotenv.config();

const { DB_URL } = process.env;

const development = {
  db: DB_URL,
};

// const production = {
//   username: DATABASE_NAME,
//   password: DATABASE_PASSWORD,
//   database: DATABASE_USE,
//   host: DATABASE_HOST,
//   dialect: DATABASE_DIALECT,
// };

export { development };
