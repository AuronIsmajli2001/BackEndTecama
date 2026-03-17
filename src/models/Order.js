const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");
const Table = require("./Table");

const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tableId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  status: { type: DataTypes.STRING, defaultValue: "open" }
}, { tableName: "Orders", timestamps: false });

Order.belongsTo(User, { foreignKey: "userId" });
Order.belongsTo(Table, { foreignKey: "tableId" });

module.exports = Order;