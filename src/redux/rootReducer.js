import { charactersReducer } from './characters';
import { episodesReducer } from './episodes';
import { uiReducer } from './ui';
import { filtersReducer } from './filters';
import { searchReducer } from './search';

export const rootReducer = {
	characters: charactersReducer,
	episodes: episodesReducer,
	ui: uiReducer,
	filters: filtersReducer,
	search: searchReducer,
};
