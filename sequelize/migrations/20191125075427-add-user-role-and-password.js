const tableName = 'Users';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(tableName, 'email', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    queryInterface.addColumn(tableName, 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'user',
    }),
    queryInterface.addColumn(tableName, 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    queryInterface.addColumn(tableName, 'salt', {
      type: Sequelize.STRING,
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn(tableName, 'email'),
    queryInterface.removeColumn(tableName, 'role'),
    queryInterface.removeColumn(tableName, 'password'),
    queryInterface.removeColumn(tableName, 'salt'),
  ]),
};
