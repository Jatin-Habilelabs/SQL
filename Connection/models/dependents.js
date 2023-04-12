const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Dependent = sequelize.define(
  "dependents",
  {
    dependent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    relationship: DataTypes.STRING,
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "employees",
        key: "employee_id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Dependent;
