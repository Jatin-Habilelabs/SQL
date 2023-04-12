const express = require("express");
const app = express();
const { sequelize } = require("../db/connection");
const Employee = require("../models/employees");
const Department = require("../models/departments");
const Location = require("../models/locations");

const joinEmpDepLoc = async (req, res) => {
  Employee.belongsTo(Department, { foreignKey: "department_id" });
  Department.hasMany(Employee, { foreignKey: "department_id" });

  Department.belongsTo(Location, { foreignKey: "location_id" });
  Location.hasMany(Department, { foreignKey: "location_id" });
  const output = await Employee.findAll({
    attributes: ["last_name"],
    include: [
      {
        model: Department,
        attributes: [
          [sequelize.fn("initcap",sequelize.col("department_name")),"Dep"]
        ],
        required: true,
        include: [
          {
            model: Location,
            attributes: ["location_id", "city"],
          },
        ],
      },
    ],

    logging: true,
  });

  res.send(output);
};
module.exports = joinEmpDepLoc;
