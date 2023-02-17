import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		dataSearch: [],
		isLoading: false,
		pagination: {},
	},
	reducers: {
		getSearchFetch: (state) => {
			state.isLoading = true;
		},
		getSearchSuccess: (state, action) => {
			state.dataSearch = action.payload.results;
			state.pagination = action.payload.info;
			state.isLoading = false;
		},
	},
});

export const { getSearchFetch, getSearchSuccess } = searchSlice.actions;

export default searchSlice.reducer;
