const tableName = 'Authors';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Joanne Rowling',
    createdAt: null,
    updatedAt: null,
  },
  {
    id: 2,
    name: 'John Ronald Reuel Tolkien',
    createdAt: null,
    updatedAt: null,
  },
  {
    id: 3,
    name: 'Sir Arthur Charles Clarke',
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
