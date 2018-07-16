// Imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import log4js from 'log4js';
import _ from 'lodash';

import models from '../';
import config from '../../config/config'
import env from '../../config/env';

var logger = log4js.getLogger('traces');

const configEnv = config[env];

const formatErrors = (e, models) => {
  if (e instanceof models.sequelize.ValidationError) {
    //  _.pick({a: 1, b: 2}, 'a') => {a: 1}
    return e.errors.map(x => _.pick(x, ['path', 'message']));
  }
  return [{ path: 'name', message: 'something went wrong' }];
};

const Query = {
  getUserById: async (_, { id }, ctx) => {
    return await models.User.findOne({ where: { id } });
  },

  getAllUsers: async (_, {}, ctx) => {
    return await models.User.findAll();
  }
}

const Mutation = {

  createUser: async (_, { username, email, password, companyId, role}) => {
    logger.info('start signup', username)
    if (password.length < 5 || password.length > 100) {
      return {
        user: { username, email, password, companyId, role },
        ok: false,
        usernameError: '',
        passwordError: 'The password needs to be between 5 and 100 characters long',
        emailError: ''
      }
      // throw new Error('The password needs to be between 5 and 100 characters long');
    }

    const passwordHashed = await bcrypt.hash(password, configEnv.saltRounds)
    const user = await models.User.create({ username, email, password: passwordHashed, companyId, role });
    return {
      user,
      ok: true,
      usernameError: '',
      passwordError: '',
      emailError: ''
    }
  },

  removeUser: async (_, { id }, ctx) => {
    return await models.User.destroy({ where: { id } });
  }
}

export { Query, Mutation };
