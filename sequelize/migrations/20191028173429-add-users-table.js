const tableName = 'Users';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING(50),
    },
    lastName: {
      type: Sequelize.STRING(50),
    },
    avatarURL: {
      type: Sequelize.STRING(200),
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: (queryInterface) => queryInterface.dropTable(tableName),
};
