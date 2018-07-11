import configDefault from './config.json';
import env from './env';
import _ from 'lodash';

let databaseDefault;
let configLocal = {};

// load local database
try {
  databaseDefault = require('./database.local.json');
} catch (e) {
  databaseDefault = require('./database.json');
}

// load local config
try {
  configLocal = require('./local.json');
} catch (e) {}

configDefault[env].db = databaseDefault[env];
const config = _.merge(configDefault, configLocal);

export default config;
