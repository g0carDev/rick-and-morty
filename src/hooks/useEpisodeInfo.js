import { useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addFavoriteEpisode, getEpisodesFetch } from '../redux/episodes/episodesSlice';

const IMAGE_URL = 'https://rickandmortyapi.com/api/character/avatar/';

export const useEpisodeInfo = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { episode, favorites } = useSelector((state) => state.episodes);

	useEffect(() => {
		return () => setIsFavorite(false);
	}, []);

	useEffect(() => {
		dispatch(getEpisodesFetch(`episode/${params.id}`));
	}, [dispatch, params.id]);

	useEffect(() => {
		if (favorites.some((favorite) => favorite.id === episode.id)) setIsFavorite(true);
	}, [episode.id, favorites]);

	const onAddFavorite = () => {
		dispatch(addFavoriteEpisode(episode));
		setIsFavorite(!isFavorite);
	};
	const getAvatars = () => {
		return episode.characters.map((el) => {
			const id = el.split('/').pop();
			return (
				<Grid item key={id}>
					<Avatar alt={`Episode N.${id}`} src={`${IMAGE_URL}/${id}.jpeg`} />
				</Grid>
			);
		});
	};

	return {
		episode,
		isFavorite,
		//methods
		onAddFavorite,
		getAvatars,
		navigate,
	};
};
