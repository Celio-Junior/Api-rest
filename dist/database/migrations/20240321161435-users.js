"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_At: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated_At: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
