const tableName = 'Users';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    firstName: 'Alexander',
    lastName: 'Prokopenko',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
