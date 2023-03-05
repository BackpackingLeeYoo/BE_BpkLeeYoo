import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { UserStamp } from "./user-stamp";

interface StampAttributes {
  stampName: string;
  stampImage: string;
  latitude: string;
  longitude: string;
}

export class Stamp extends Model<StampAttributes> {
  public stampName!: string;
  public stampImage!: string;
  public latitude!: string;
  public longitude!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    stampHasManyUserStamp: Association<Stamp, UserStamp>;
  };
}

Stamp.init(
  {
    stampName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stampImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Stamp",
    tableName: "Stamps",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    paranoid: true, //soft delete 기능
    underscored: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

Stamp.hasMany(UserStamp, {
  sourceKey: "id",
  foreignKey: "stampId",
  as: "stampHasManyUserStamp",
});

// const Sequelize = require("sequelize");

// module.exports = class Stamp extends Sequelize.Model {
//   static init(sequelize) {
//     return super.init(
//       {
//         stampName: {
//           type: Sequelize.STRING,
//           allowNull: false,
//         },
//         stampImage: {
//           type: Sequelize.STRING,
//           allowNull: false,
//         },
//         latitude: {
//           type: Sequelize.INTEGER,
//           allowNull: false,
//         },
//         longitude: {
//           type: Sequelize.INTEGER,
//           allowNull: false,
//         },
//       },
//       {
//         sequelize,
//         timestamps: true,
//         underscored: false,
//         paranoid: true,
//         modelName: "Stamp",
//         tableName: "Stamps",
//         charset: "utf8mb4",
//         collate: "utf8mb4_general_ci",
//       }
//     );
//   }

//   static associate(db) {
//     db.Stamp.hasMany(db.UserStamp, { foreignKey: "stampId", sourceKey: "id" });
//   }
// };
