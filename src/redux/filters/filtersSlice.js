import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		searchTerm: '',
		searchIn: 'character',
		searchBy: 'name',
		status: '',
		gender: '',
	},
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		setSearchIn: (state, action) => {
			state.searchIn = action.payload;
		},
		setSearchBy: (state, action) => {
			state.searchBy = action.payload;
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setGender: (state, action) => {
			state.gender = action.payload;
		},
		clearFilters: (state) => {
			state.searchTerm = '';
			state.searchIn = 'character';
			state.searchBy = 'name';
			state.status = '';
			state.gender = '';
		},
	},
});

export const { clearFilters, setSearchTerm, setSearchIn, setSearchBy, setStatus, setGender } = filtersSlice.actions;

export default filtersSlice.reducer;
