"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserStamps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      stampId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Stamps",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      stampName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      isStamp: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userStampImage: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      stampComment: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      weatherTemp: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      weatherIcon: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      registrationAt: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserStamps");
  },
};
