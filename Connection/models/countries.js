const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Country = sequelize.define(
  "countries",
  {
    country_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    country_name: DataTypes.STRING,
    region_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "regions",
        key: "region_id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Country;
