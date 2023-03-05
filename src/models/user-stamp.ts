const Sequelize = require("sequelize");

module.exports = class UserStamp extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "User",
            key: "userId",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        stampId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Stamp",
            key: "stampId",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        isStamp: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        userStampImage: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stampComment: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        weatherTemp: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        weatherIcon: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        paranoid: true,
        modelName: "UserStamp",
        tableName: "UserStamps",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.UserStamp.belongsTo(db.User, {
      foreignKey: "userId",
      targetKey: "id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    db.UserStamp.belongsTo(db.Stamp, {
      foreignKey: "stampId",
      targetKey: "id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
