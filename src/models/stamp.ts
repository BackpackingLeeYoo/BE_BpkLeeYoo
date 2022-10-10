import SQ from "sequelize";
import { sequelize } from "./index";
import { User } from "./user";
const DataTypes = SQ.DataTypes;
// const Sequelize = SQ.Sequelize;

export const Stamp = sequelize.define("Stamp", {
  stampId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  stampName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  stampImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: DataTypes.INTEGER,
  longitude: DataTypes.INTEGER,
  isStamp: DataTypes.BOOLEAN,
  stampComment: DataTypes.STRING,
  weatherTemp: DataTypes.STRING,
  weatherIcon: DataTypes.STRING,
});
Stamp.belongsTo(User);

// const { Model } = require("sequelize");

// module.exports = (
//   sequelize: any,
//   DataTypes: { INTEGER: any; STRING: any; BOOLEAN: any }
// ) => {
//   class Stamp extends Model {
//     static associate(models: any) {
//       this.belongsTo(models.User);
//     }
//   }
//   Stamp.init(
//     {
//       stampId: {
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       stampName: DataTypes.STRING,
//       stampImage: DataTypes.STRING,
//       latitude: DataTypes.INTEGER,
//       longitude: DataTypes.INTEGER,
//       isStamp: DataTypes.BOOLEAN,
//       stampComment: DataTypes.STRING,
//       weatherTemp: DataTypes.STRING,
//       weatherIcon: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "Stamp",
//     }
//   );
//   return Stamp;
// };
