const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		"Returns array of Tracks"
		tracksForHome: [Track!]!
		"Fetch a specific track using the provided ID"
		track(id: ID!): Track
		"Fetch a specific module using the provided ID"
		module(id: ID!): Module
	}

	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViews!
	}

	type IncrementTrackViews {
		"Similar to HTTP status code to represent status of response"
		code: Int!
		"Represents whether the mutation was successful"
		success: Boolean!
		"Human-readable message for UI"
		message: String!
		"Newly updated track after the successful mutation"
		track: Track
	}

	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		"The track id"
		id: ID!
		"The track's title"
		title: String!
		"The track's main Author"
		author: Author!
		"The track's illustration to display in track card or track page detail"
		thumbnail: String
		"The track's approximate length to complete, in minutes"
		length: Int
		"The number of modules this track contains"
		modulesCount: Int
		"The description of the title"
		description: String
		"The no of views of the track"
		numberOfViews: Int
		"The list of modules of the track"
		modules: [Module!]!
	}

	"Module is the series in track"
	type Module {
		"The module id"
		id: ID!
		"The title of the module"
		title: String!
		"Length of the module"
		length: Int
		"The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
		content: String
		"Video URL of the module"
		videoUrl: String
	}

	"Author of a complete Track or a Module"
	type Author {
		"ID of the author"
		id: ID!
		"Name of the author"
		name: String!
		"Photo url of the author"
		photo: String
	}
`;

module.exports = typeDefs;
