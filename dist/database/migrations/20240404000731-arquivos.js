"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("arquivos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "alunos",
          key: "id",
        },
        onDelete: "SET NULL", // CASCADE
        onUpdate: "CASCADE",
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
    return queryInterface.dropTable("arquivos");
  },
};
