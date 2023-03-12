import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { UserStamp } from "./user-stamp";

interface StampAttributes {
  id: number;
  stampName: string;
  stampImage: string;
  latitude: number;
  longitude: number;
}

export class Stamp extends Model<StampAttributes> {
  public readonly id!: number;
  public stampName!: string;
  public stampImage!: string;
  public latitude!: number;
  public longitude!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    stampHasManyUserStamp: Association<Stamp, UserStamp>;
  };
}

Stamp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
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
    paranoid: true,
    underscored: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

// Stamp.hasMany(UserStamp, {
//   sourceKey: "id",
//   foreignKey: "stampId",
//   as: "stampHasManyUserStamp",
// });
