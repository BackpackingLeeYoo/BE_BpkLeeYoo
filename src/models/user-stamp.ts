import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { Stamp } from "./stamp";
import { User } from "./user";

interface UserStampAttributes {
  id: number;
  userId: number;
  stampId: number;
  stampName: string;
  isStamp: boolean;
  userStampImage: string;
  stampComment: string | null;
  weatherTemp: string | null;
  weatherIcon: string | null;
  registrationAt: Date | null;
}

export class UserStamp extends Model<UserStampAttributes> {
  public readonly id!: number;
  public userId!: number;
  public stampId!: number;
  public stampName!: string;
  public isStamp!: boolean;
  public userStampImage!: string;
  public stampComment: string;
  public weatherTemp: string;
  public weatherIcon: string;
  public registrationAt: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    userStampBelongsToUser: Association<UserStamp, User>;
    userStampBelongsToStamp: Association<UserStamp, Stamp>;
  };
}

UserStamp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "userId",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    stampId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Stamp",
        key: "stampId",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    stampName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isStamp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userStampImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stampComment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weatherTemp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weatherIcon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    registrationAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    modelName: "UserStamp",
    tableName: "UserStamps",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

UserStamp.belongsTo(User, {
  targetKey: "id",
  foreignKey: "userId",
  onDelete: "cascade",
  onUpdate: "cascade",
  as: "userStampBelongsToUser",
});

UserStamp.belongsTo(Stamp, {
  targetKey: "id",
  foreignKey: "stampId",
  onDelete: "cascade",
  onUpdate: "cascade",
  as: "userStampBelongsToStamp",
});
