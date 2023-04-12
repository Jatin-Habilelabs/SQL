
const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Jobs = sequelize.define("jobs", {
  job_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  job_title: DataTypes.STRING,
  min_salary: DataTypes.INTEGER,
  max_salary: DataTypes.INTEGER,
},
{
  timestamps:false
});

module.exports = Jobs;


