const tableName = 'Authors';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: (queryInterface) => queryInterface.dropTable(tableName),
};
