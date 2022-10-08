import dotenv from "dotenv";
dotenv.config();

const { DB_URL } = process.env;

const development = {
  db: DB_URL!,
};

export { development };
