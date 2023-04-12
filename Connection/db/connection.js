const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize("hr", "postgres", "jatinkumar", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });


module.exports = { sequelize};
