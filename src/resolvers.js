const resolvers = {
	Query: {
		// Returns an array of Tracks.
		tracksForHome: (_, __, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome();
		},
		// Returns a single Track for the specific id.
		track: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getTrack(id);
		},
		// Returns a single module for the specified id.
		module: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getModule(id);
		},
	},

	Mutation: {
		incrementTrackViews: async (_, { id }, { dataSources }) => {
			try {
				const track = await dataSources.trackAPI.incrementTrackViews(id);

				return {
					code: 200,
					success: true,
					message: `Successfully incremented number of views for track ${id}`,
					track,
				};
			} catch (err) {
				return {
					code: err.extensions.response.status,
					success: false,
					message: err.extensions.response.body,
					track: null,
				};
			}
		},
	},

	Track: {
		// Returns a author
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
		modules: ({ id }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(id);
		},
		durationInSeconds: ({ length }) => length,
	},
	Module: {
		durationInSeconds: ({ length }) => length,
	},
};

module.exports = resolvers;
