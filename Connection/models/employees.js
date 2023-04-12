const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define(
  "employees",
  {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    hire_date: DataTypes.DATE,
    job_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "jobs",
        key: "job_id",
      },
    },
    salary: DataTypes.NUMBER,
    manager_id: DataTypes.INTEGER,
    department_id: {
      field: "department_id",
      type: DataTypes.INTEGER,
      references: {
        model: "departments",
        key: "department_id",
      },
    },
  },
  {
    timestamps: false,
    associate: function (models) {
      Employee.belongsTo(models.departments, { foreignKey: "department_id" });
      Employee.belongsTo(models.jobs, { foreignKey: "job_id" });
      Employee.belongsTo(Employee, { foreignKey: "manager_id",as:"mgr" });
    },
  }
);

module.exports = Employee;
