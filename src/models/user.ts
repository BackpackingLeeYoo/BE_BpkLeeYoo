import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { UserStamp } from "./user-stamp";

interface UserAttributes {
  id: number;
  email: string;
  nickname: string;
  profileImg: string;
}

export class User extends Model<UserAttributes> {
  static findById(userId: any) {
    throw new Error("Method not implemented.");
  }
  public readonly id!: number;
  public email!: string;
  public nickname!: string;
  public profileImg!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    userHasManyUserStamp: Association<User, UserStamp>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    modelName: "User",
    tableName: "Users",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    paranoid: true, //soft delete 기능
    underscored: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

User.hasMany(UserStamp, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "userHasManyUserStamp",
});
