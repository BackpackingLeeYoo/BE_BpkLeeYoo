const Sequelize = require("sequelize");

module.exports = class Stamp extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        stampName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stampImage: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        latitude: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        paranoid: true,
        modelName: "Stamp",
        tableName: "Stamps",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Stamp.hasMany(db.UserStamp, { foreignKey: "stampId", sourceKey: "id" });
  }
};
