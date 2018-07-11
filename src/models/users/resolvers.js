// Imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import models from '../';
import config from '../../config/config'
import env from '../../config/env';

const configEnv = config[env];

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
    const passwordHashed = await bcrypt.hash(password, configEnv.saltRounds)
    return await models.User.create({ username, email, password: passwordHashed, companyId, role });
  },

  removeUser: async (_, { id }, ctx) => {
    return await models.User.destroy({ where: { id } });
  }
}

export { Query, Mutation };
