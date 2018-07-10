'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    },
    confirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    role: {
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('users');
}

