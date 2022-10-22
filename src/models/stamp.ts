// import SQ from "sequelize";
// import { sequelize } from "./index";
// import { User } from "./user";
// const DataTypes = SQ.DataTypes;

// export const Stamp = sequelize.define("Stamp", {
//   stampId: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   stampName: {
//     type: DataTypes.STRING(45),
//     allowNull: false,
//   },
//   stampImage: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   latitude: DataTypes.INTEGER,
//   longitude: DataTypes.INTEGER,
//   isStamp: DataTypes.BOOLEAN,
//   stampComment: DataTypes.STRING,
//   weatherTemp: DataTypes.STRING,
//   weatherIcon: DataTypes.STRING,
// });
// Stamp.belongsTo(User);
