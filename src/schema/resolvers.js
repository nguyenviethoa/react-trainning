import {
  Query as UserQuery,
  Mutation as UserMutation
} from '../models/users/resolvers';

import Date from './scalar/Date';

const resolvers = {
  Query: {
    ...UserQuery,
  },
  Mutation: {
    ...UserMutation,
  },
  Date
};

export default resolvers;