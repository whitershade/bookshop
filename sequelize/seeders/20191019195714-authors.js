const tableName = 'Authors';
const date = Date.now();

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Joanne Rowling',
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 2,
    name: 'John Ronald Reuel Tolkien',
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 3,
    name: 'Sir Arthur Charles Clarke',
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
