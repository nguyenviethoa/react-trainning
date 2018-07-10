'use strict';

// import bcrypt from 'bcrypt';
// import config from '../config/config.json';
// import params from '../config/params.json';

const bcrypt = require('bcrypt');
const config = require('../config/config.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [
      {
        id: 1,
        name: 'Open Techiz',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};
