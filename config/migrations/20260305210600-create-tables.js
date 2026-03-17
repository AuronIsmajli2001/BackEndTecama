'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tables', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      number: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Tables');
  }
};
