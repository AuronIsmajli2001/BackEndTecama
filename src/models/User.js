const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  passcode: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING }
}, { tableName: "Users", timestamps: false });

module.exports = User;