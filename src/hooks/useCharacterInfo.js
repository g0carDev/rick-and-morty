import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { addFavoriteCharacter, getCharactersFetch } from '../redux/characters/charactersSlice';

export const useCharacterInfo = () => {
	const [episodeLimit, setEpisodeLimit] = useState(5);
	const [isFavorite, setIsFavorite] = useState(false);

	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { character, favorites } = useSelector((state) => state.characters);

	useEffect(() => {
		dispatch(getCharactersFetch(`character/${params.id}`));
	}, [dispatch, params.id]);

	useEffect(() => {
		if (favorites.some((favorite) => favorite.id === character.id)) setIsFavorite(true);
	}, [character.id, favorites]);

	const onAddFavorite = () => {
		dispatch(addFavoriteCharacter(character));
		setIsFavorite(!isFavorite);
	};

	const onShowEpisodes = (value) => {
		if (episodeLimit === character.episode.length) return;
		if (episodeLimit + value < 5) return;
		setEpisodeLimit(episodeLimit + value);
	};

	return {
		character,
		episodeLimit,
		isFavorite,
		//methods
		onAddFavorite,
		onShowEpisodes,
		navigate,
	};
};
