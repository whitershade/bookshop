const tableName = 'Authors';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    name: 'Joanne Rowling',
  },
  {
    name: 'John Ronald Reuel Tolkien',
  },
  {
    name: 'Sir Arthur Charles Clarke',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
