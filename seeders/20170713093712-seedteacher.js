'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      // return queryInterface.bulkInsert('Person', [{
      //   first_name: 'John Doe',
      //   isBetaMember: false
      // }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});

    */
    return
  }
};
