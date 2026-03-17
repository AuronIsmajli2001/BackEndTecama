const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Category = require("./Category");

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: true },
  categoryID: { type: DataTypes.INTEGER, allowNull: false },
  priceSell: { type: DataTypes.DECIMAL(10,2) },
  priceBuy: { type: DataTypes.DECIMAL(10,2) },
  stock: { type: DataTypes.INTEGER }
}, { tableName: "Products", timestamps: false });

// Relation
Product.belongsTo(Category, { foreignKey: "categoryID" });

module.exports = Product;