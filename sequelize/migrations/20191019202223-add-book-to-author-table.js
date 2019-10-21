const tableName = 'BookToAuthor';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    bookId: Sequelize.INTEGER,
    authorId: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),
  down: (queryInterface) => queryInterface.dropTable(tableName),
};
