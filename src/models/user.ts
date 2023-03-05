import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { UserStamp } from "./user-stamp";

interface UserAttributes {
  email: string;
  nickname: string;
  profileImg: string;
}

export class User extends Model<UserAttributes> {
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

/*
const Sequelize = require("sequelize");

export class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        profileImg: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        paranoid: true, //soft delete 기능
        modelName: "User",
        tableName: "users",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.UserStamp, { foreignKey: "userId", sourceKey: "id" });
  }
}
*/
