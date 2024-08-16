'use-strict';

module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('Users', {});
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  },
};
