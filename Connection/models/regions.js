const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Region = sequelize.define(
  "regions",
  {
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    region_name: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);
module.exports = Region;
