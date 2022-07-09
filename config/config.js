import dotenv from "dotenv";
dotenv.config();

const { HOST_PORT, DB_URL } = process.env;

export const config = {
  PORT: HOST_PORT,
  DB: DB_URL,
};
