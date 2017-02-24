'use strict';
const faker = require('faker');

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
    return queryInterface.bulkInsert('FriendLists', [
      {
        requesterID: 1,
        approverID: 5,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 5,
        approverID: 1,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 1,
        approverID: 3,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 3,
        approverID: 1,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 2,
        approverID: 4,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 4,
        approverID: 2,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 4,
        approverID: 5,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 5,
        approverID: 4,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 2,
        approverID: 5,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requesterID: 5,
        approverID: 2,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('FriendLists', null, {});
  }
};
