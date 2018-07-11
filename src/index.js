import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';
import models from './models';

console.log('resolvers', resolvers);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// models.sequelize.sync().then(() => {
//   app.listen(PORT);
// });

app.listen(PORT);