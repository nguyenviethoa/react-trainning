import Base from '../base';

const UserType = `
  extend type Query {
    getUserById(id: Int): UserType, 
    getAllUsers: [UserType]
  }

  extend type Mutation {
    createUser(username: String!, email: String!, password: String!, companyId: Int!, role: String): UserSignupType,
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

const UserSignupType = `
  type UserSignupType {
    user: UserType,
    ok: Boolean,
    usernameError: String,
    passwordError: String,
    emailError: String
  }
`;

export default () => [ Base, UserType, UserSignupType ];