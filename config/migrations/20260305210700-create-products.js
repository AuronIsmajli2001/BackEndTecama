'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      categoryID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Categories', key: 'id' }
      },
      priceSell: {
        type: Sequelize.DECIMAL(10, 2)
      },
      priceBuy: {
        type: Sequelize.DECIMAL(10, 2)
      },
      stock: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Products');
  }
};
