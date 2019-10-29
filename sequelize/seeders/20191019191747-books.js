const tableName = 'Books';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    name: 'Harry Potter and the Philosopher\'s Stone',
  },
  {
    name: 'Harry Potter and the Chamber of Secrets',
  },
  {
    name: 'Harry Potter and the Prisoner of Azkaban',
  },
  {
    name: 'The Hobbit',
  },
  {
    name: 'The wind from the Sun',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
