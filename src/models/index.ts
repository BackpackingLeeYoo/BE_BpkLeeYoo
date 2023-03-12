import { Sequelize } from "sequelize";
import config from "../config/config";

const env = process.env.NODE_ENV || "development";
const db = config[env];

export const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: "mysql",
});
