import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import resolvers from './resolvers';

import prisma from './prisma'

const pubsub = new PubSub();

const server = new GraphQLServer(
  {
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
      db,
      pubsub,
      prisma
    }
  }
);
server.start(() => console.log('Server is started!'));