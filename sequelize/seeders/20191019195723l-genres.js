const tableName = 'Genres';
const date = null;

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Fantasy Fiction',
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 2,
    name: 'Science Fiction',
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
