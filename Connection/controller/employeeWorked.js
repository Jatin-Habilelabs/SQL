const express = require("express");
const app = express();
const { sequelize } = require("../db/connection");
const Employee = require("../models/employees");
const Department = require("../models/departments");

const Empworked = async (req, res) => {
  Employee.belongsTo(Department, { foreignKey: "department_id" });
  Department.hasMany(Employee, { foreignKey: "department_id" });

  const output = await Employee.findAll({
    attributes: [
      [sequelize.literal("last_name"), "LastName"],
      [sequelize.literal("now()-hire_date"), "MONTHS_WORKED"],
    ],

    logging: true,
  });

  res.send(output);
};
module.exports = Empworked;
