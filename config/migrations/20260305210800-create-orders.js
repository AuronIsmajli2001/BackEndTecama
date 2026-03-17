'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Tables', key: 'id' }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('GETDATE()')
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'open'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Orders');
  }
};
