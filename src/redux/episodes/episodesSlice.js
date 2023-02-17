import { createSlice } from '@reduxjs/toolkit';

export const episodesSlice = createSlice({
	name: 'episodes',
	initialState: {
		episodes: [],
		episode: {},
		favorites: JSON.parse(localStorage.getItem('favoriteEpisodes')) || [],
		pagination: {},
		isLoading: false,
	},
	reducers: {
		getEpisodesFetch: (state) => {
			state.isLoading = true;
		},
		getEpisodesSuccess: (state, action) => {
			state.episodes = action.payload.results;
			state.pagination = action.payload.info;
			state.isLoading = false;
		},
		getEpisodeSuccess: (state, action) => {
			state.episode = action.payload;
			state.isLoading = false;
		},
		getEpisodesFailure: (state) => {
			state.isLoading = false;
		},
		addFavoriteEpisode: (state, action) => {
			const episodeId = action.payload.id;
			const isFavorite = state.favorites.some((favorite) => favorite.id === episodeId);

			if (!isFavorite) state.favorites.push(action.payload);
			else state.favorites = state.favorites.filter((favorite) => favorite.id !== episodeId);

			localStorage.setItem('favoriteEpisodes', JSON.stringify(state.favorites));
		},
	},
});

export const { getEpisodesFetch, getEpisodesSuccess, getEpisodeSuccess, getEpisodesFailure, addFavoriteEpisode } =
	episodesSlice.actions;

export default episodesSlice.reducer;
