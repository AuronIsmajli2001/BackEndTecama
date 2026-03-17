const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Table = sequelize.define("Table", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.INTEGER }
}, { tableName: "Tables", timestamps: false });

module.exports = Table;