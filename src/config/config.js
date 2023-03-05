require("dotenv").config();

const env = process.env;

const development = {
  username: env.DOMAIN_MYSQL_USER,
  password: env.DOMAIN_MYSQL_PASSWORD,
  database: env.DOMAIN_MYSQL_DB,
  host: env.DOMAIN_MYSQL_URL,
  dialect: env.DOMAIN_MYSQL_TYPE,
};

const production = {
  username: env.DOMAIN_MYSQL_USER,
  password: env.DOMAIN_MYSQL_PASSWORD,
  database: env.DOMAIN_MYSQL_DB,
  host: env.DOMAIN_MYSQL_URL,
  dialect: env.DOMAIN_MYSQL_TYPE,
};

const test = {
  username: env.DOMAIN_MYSQL_USER,
  password: env.DOMAIN_MYSQL_PASSWORD,
  database: env.DOMAIN_MYSQL_DB_TEST,
  host: env.DOMAIN_MYSQL_URL,
  dialect: env.DOMAIN_MYSQL_TYPE,
};

module.exports = { development, production, test };
