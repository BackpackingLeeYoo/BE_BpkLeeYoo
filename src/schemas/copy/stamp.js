("use strict");

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Stamp extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        targetKey: "userId",
        foreignKey: "userId",
      });
    }
  }
  Stamp.init(
    {
      stampId: {
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
      stampName: {
        type: DataTypes.STRING(45),
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
        allowNull: false,
      },
      weatherTemp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weatherIcon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Stamp",
    }
  );
  return Stamp;
};
