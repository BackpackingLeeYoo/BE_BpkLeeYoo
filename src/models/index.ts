import { Sequelize } from "sequelize";
import { configs } from "../config/config";

// require("dotenv").config();
// const Sequelize = require("sequelize");
// const User = require("../schemas/user");
// const Stamp = require("../schemas/stamp");

const env = process.env.NODE_ENV || "development";
const config = configs[env];
// const db = {};

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.User = User;
// db.Stamp = Stamp;

// User.init(sequelize);
// Stamp.init(sequelize);

// module.exports = db;
