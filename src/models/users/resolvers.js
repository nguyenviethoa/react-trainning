import models from '../';

const Query = {
  getUserById: async (_, { id }, ctx) => {
    return await models.User.findOne({ where: { id } });
  }
}

const Mutation = {

  createUser: async (_, { username, email, password, companyId, role}) => {
    logger.info('start createuser');
    return ;
  },

  removeUser: async (_, { id }, ctx) => {
    return await models.User.destroy({ where: { id } });
  }
}

export { Query, Mutation };
