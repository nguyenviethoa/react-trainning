'use strict';

// import bcrypt from 'bcrypt';
// import config from '../config/config.json';
// import params from '../config/params.json';

const bcrypt = require('bcrypt');
const config = require('../config/config.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'The Manager',
        email: 'admin@closedeal.com',
        password: bcrypt.hashSync('123456', config.development.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        username: 'The Agent',
        email: 'user@closedeal.com',
        password: bcrypt.hashSync('123456', config.development.saltRounds),
        role: params.user.roles.normal,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
