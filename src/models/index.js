import Sequelize from 'sequelize';

// App Imports
import env from '../config/env';
import databaseConfig from '../config/database.json';

// Load database config
const databaseConfigEnv = databaseConfig[env];

// Create new database connection
const connection = new Sequelize(databaseConfigEnv.database, databaseConfigEnv.username, databaseConfigEnv.password, {
  host: databaseConfigEnv.host,
  dialect: databaseConfigEnv.dialect,
  logging: false,
  operatorsAliases: Sequelize.Op,
  port: databaseConfigEnv.port,
});

// Test connection
console.info('SETUP - Connecting database...');

connection
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.');
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err);
  });

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

const models        = {
  User: connection.import('./users'),
  Company: connection.import('./companies'),
  Post: connection.import('./posts'),
  Comment: connection.import('./comments'),
  Attendance: connection.import('./attendances')

};

models.sequelize = connection;
models.Sequelize = Sequelize;

export default models;