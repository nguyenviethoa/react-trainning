import Base from '../base';

const UserType = `
  extend type Query {
    getUserById(id: Int): UserType, 
  }

  extend type Mutation {
    createUser(username: String!, email: String!, password: String!, companyId: Int!, role: String): UserType,
    removeUser(id: Int!): UserType
  }

  type UserType {
    id: Int!
    username: String!
    email: String!
    password: String!
    role: String
    createAt: String
    updateAt: String
  }

`;

export default () => [ Base, UserType ];