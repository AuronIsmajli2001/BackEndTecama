const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Order = require("./Order");
const Product = require("./Product");

const OrderItem = sequelize.define("OrderItem", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderId: { type: DataTypes.INTEGER, allowNull: false },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: "OrderItems", timestamps: false });

OrderItem.belongsTo(Order, { foreignKey: "orderId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

module.exports = OrderItem;