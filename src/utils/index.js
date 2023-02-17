export const switchStatusColor = (status = '') => {
	switch (status) {
		case 'Alive':
			return '#55cc44';
		case 'Dead':
			return '#d63d2e';
		case 'unknown':
			return '#ffd369';
		default:
			return 'black';
	}
};
