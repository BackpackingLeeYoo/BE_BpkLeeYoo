import * as dotenv from "dotenv";
dotenv.config();

const env = process.env;

const config = {
  development: {
    username: env.DOMAIN_MYSQL_USER,
    password: env.DOMAIN_MYSQL_PASSWORD,
    database: env.DOMAIN_MYSQL_DB,
    host: env.DOMAIN_MYSQL_URL,
    dialect: env.DOMAIN_MYSQL_TYPE,
  },
  production: {
    username: env.DOMAIN_MYSQL_USER,
    password: env.DOMAIN_MYSQL_PASSWORD,
    database: env.DOMAIN_MYSQL_DB,
    host: env.DOMAIN_MYSQL_URL,
    dialect: env.DOMAIN_MYSQL_TYPE,
  },
  test: {
    username: env.DOMAIN_MYSQL_USER,
    password: env.DOMAIN_MYSQL_PASSWORD,
    database: env.DOMAIN_MYSQL_DB_TEST,
    host: env.DOMAIN_MYSQL_URL,
    dialect: env.DOMAIN_MYSQL_TYPE,
  },
};

export default config;
