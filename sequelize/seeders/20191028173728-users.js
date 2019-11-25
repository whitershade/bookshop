const tableName = 'Users';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    firstName: 'Alexander',
    lastName: 'Prokopenko',
    salt: 'aksdjfaksjdfk',
    password: '1234',
    role: 'admin',
    email: 'my-email@gmail.com',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
