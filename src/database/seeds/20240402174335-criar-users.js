const bcryptjs = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        nome: "demoninho",
        email: "demoninho@gmail.com",
        password_hash: await bcryptjs.hash("celio123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down() {
  },
};
