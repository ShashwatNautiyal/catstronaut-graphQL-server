const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return { trackAPI: new TrackAPI() };
	},
});

const { url, port } = await server.listen({ post: process.env.PORT || 4000 });

console.log(`
        🚀  Server is running!
        🔉  Listening on port ${port}
        📭  Query at ${url}
    `);
