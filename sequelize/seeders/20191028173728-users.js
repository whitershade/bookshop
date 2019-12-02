const tableName = 'Users';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    firstName: 'Alexander',
    lastName: 'Prokopenko',
    salt: 'e27a40e6a4007e8f',
    password: 'c8804cfd236c55acc7d13e387b87ac03f6cc71d4dc079357a6af6b70b9eb8d17c7d4df1f64f769b03ab3f84f86d2cd24da0a9dc87fe5f4003eb4c8e981991094',
    role: 'admin',
    email: 'my@email.com',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
