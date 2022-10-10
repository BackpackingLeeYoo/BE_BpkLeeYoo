import SQ from "sequelize";
import { sequelize } from "./index";
const DataTypes = SQ.DataTypes;

export const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  profileImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// const { Model } = require("sequelize");

// export const User = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//       this.hasMany(models.Stamp);
//     }
//   }
//   User.init(
//     {
//       userId: {
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       email: DataTypes.STRING,
//       nickname: DataTypes.STRING,
//       profileImg: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };
