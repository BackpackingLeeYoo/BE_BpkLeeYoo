"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Stamps", {
      stampId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stampName: {
        type: Sequelize.STRING,
      },
      stampImage: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.INTEGER,
      },
      longitude: {
        type: Sequelize.INTEGER,
      },
      isStamp: {
        type: Sequelize.BOOLEAN,
      },
      stampComment: {
        type: Sequelize.STRING,
      },
      weatherTemp: {
        type: Sequelize.STRING,
      },
      weatherIcon: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Stamps");
  },
};
