import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodesFetch } from '../redux/episodes/episodesSlice';

export const useEpisodesPage = () => {
	const [currentPage, setCurrentPage] = useState(Number(localStorage.getItem('currentEpisodesPage')) ?? 1);
	const { episodes, isLoading, pagination } = useSelector((state) => state.episodes);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem('currentEpisodesPage')) {
			localStorage.setItem('currentEpisodesPage', 1);
		}
	}, []);

	useEffect(() => {
		dispatch(getEpisodesFetch(`episode?page=${currentPage}`));
	}, [dispatch, episodes.length, currentPage]);

	useEffect(() => {
		localStorage.setItem('currentEpisodesPage', currentPage);
	}, [currentPage]);

	const onChangePagination = (event, value) => {
		dispatch(getEpisodesFetch(`episode?page=${value}`));
		setCurrentPage(value);
	};

	return {
		episodes,
		isLoading,
		currentPage,
		pagination,
		onChangePagination,
	};
};
