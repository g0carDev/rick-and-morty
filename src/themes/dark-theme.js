import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#87F54E',
		},
		secondary: {
			main: '#3A64D8',
		},
		info: {
			main: '#272727',
		},
	},
	components: {
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
				position: 'fixed',
			},
			styleOverrides: {
				root: {
					backgroundColor: '#272727',
					height: 60,
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: 30,
					fontWeight: 600,
				},
				h2: {
					fontSize: 20,
					fontWeight: 400,
				},
				subtitle1: {
					fontSize: 18,
					fontWeight: 600,
				},
			},
		},

		MuiButton: {
			defaultProps: {
				variant: 'contained',
				size: 'small',
				disableElevation: true,
				color: 'info',
			},
			styleOverrides: {
				root: {
					textTransform: 'none',
					boxShadow: 'none',
					borderRadius: 10,
					':hover': {
						backgroundColor: 'rgba(0,0,0,0.05)',
						transition: 'all 0.3s ease-in-out',
					},
				},
			},
		},

		MuiCard: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					boxShadow: '0px 1px 5px #fff',
					borderRadius: '10px',
					':hover': {
						translateY: 5,
					},
				},
			},
		},
	},
});
