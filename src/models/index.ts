import SQ from "sequelize";
import config from "../configs/config";

console.log(config);
const { host, username, database, password } = config.development;

export const sequelize = new SQ.Sequelize(
  database,
  username as string,
  password as string,
  {
    host,
    dialect: "mysql",
    logging: false,
  }
);

// const fs = require("fs");
// const path = require("path");
// const Sequelize = require("sequelize");

// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.ts")[env];

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.User = require("./user")(sequelize, Sequelize);
// db.Stamp = require("./stamp")(sequelize, Sequelize);

// module.exports = db;

// import fs from "fs";
// import path from "path";
// import Sequelize from "sequelize";
// import process from "process";
// import config from "fs";
// // const fs = require("fs");
// // const path = require("path");
// // const Sequelize = require("sequelize");
// // const process = require("process");
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../../config/config.json")[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = { db };
// export default db;
