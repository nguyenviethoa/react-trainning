import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import log4js from 'log4js';

import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';
import models from './models';
//////////////////////////////////////////////////////////////////

log4js.configure({
  appenders: { traces: { type: 'file', filename: 'traces.log' } },
  categories: { default: { appenders: ['traces'], level: 'debug' } }
});
var logger = log4js.getLogger('traces');

logger.info('server start');

////////////////////////////////////////////////////////////////////

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const PORT = 8081;

const app = express();
app.use(cors('*'));

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// models.sequelize.sync().then(() => {
//   app.listen(PORT);
// });

app.listen(PORT);