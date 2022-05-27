const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config');

//Why grapgh with Apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB).then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 5000 });
}).then(res => {
    console.log(`Server running on ${res.url}`);
});