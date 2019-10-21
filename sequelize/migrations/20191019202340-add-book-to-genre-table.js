const tableName = 'BookToGenre';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    bookId: Sequelize.INTEGER,
    genreId: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: (queryInterface) => queryInterface.dropTable(tableName),
};
