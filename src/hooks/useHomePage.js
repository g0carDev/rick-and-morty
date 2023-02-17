import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersFetch } from '../redux/characters/charactersSlice';

export const useHomePage = () => {
	const { characters, isLoading } = useSelector((state) => state.characters);
	const dispatch = useDispatch();

	useEffect(() => {
		if (characters.length > 0) return;
		dispatch(getCharactersFetch('character'));
	}, [dispatch, characters.length]);

	return {
		characters,
		isLoading,
	};
};
