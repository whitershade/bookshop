const tableName = 'Ratings';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(tableName, 'userId', {
    type: Sequelize.INTEGER,
    allowNull: false,
  }),
  down: (queryInterface) => queryInterface.removeColumn(tableName, 'userId'),
};
