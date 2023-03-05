"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Stamps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      stampName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      stampImage: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.DataTypes.INTEGER(50),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DataTypes.INTEGER(50),
        allowNull: false,
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
    await queryInterface.dropTable("Stamps");
  },
};
