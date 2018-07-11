import models from '../';

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
    logger.info('start createuser');
    return await models.User.create({ username, email, password, companyId, role });
  },

  removeUser: async (_, { id }, ctx) => {
    return await models.User.destroy({ where: { id } });
  }
}

export { Query, Mutation };
