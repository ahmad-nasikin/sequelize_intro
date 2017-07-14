'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Bambang',
      lastname: 'Suprapto',
      email: 'bambangsuprapto@sekolahid',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Rukmana',
      lastname: 'Fatmawati',
      email: 'rukmanafatmawati@sekolah.id',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Butet',
      lastname: 'Naiborhu',
      email: 'butetnaiborhu@sekolah.id',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Yulius',
      lastname: 'Prawiranegara',
      email: 'yuliusprawinanegara@sekoalah.id',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulk('Teachers', null, {});
  }
};
