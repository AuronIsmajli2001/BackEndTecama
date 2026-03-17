'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Orders', key: 'id' }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Products', key: 'id' }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('OrderItems');
  }
};
