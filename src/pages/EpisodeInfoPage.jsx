import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

import { Spinner } from '../components/ui'
import { useEpisodeInfo } from '../hooks'

export const EpisodeInfoPage = () => {
  const { episode, isFavorite, navigate, onAddFavorite, getAvatars } = useEpisodeInfo()

  if (!episode.id) {
    return <Spinner />
  }

  const MyTypography = ({ primaryText, secondaryText }) => {
    return <Typography variant='h6'><span style={{ color: '#11B0C8' }}>{primaryText}</span> | {secondaryText} </Typography>
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, m: '0 auto' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <IconButton onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon sx={{ color: 'white', fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={onAddFavorite}>
          <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'white', fontSize: 30 }} />
        </IconButton>
      </Box>
      <Typography variant='h1' fontSize={80} textAlign='end' color='primary'> #{episode.id} </Typography>
      <Box>
        <MyTypography primaryText='Name' secondaryText={episode.name} />
        <MyTypography primaryText='Air Date' secondaryText={episode.air_date} />
        <MyTypography primaryText='Episode' secondaryText={episode.episode} />
      </Box>
      <Typography variant='h1' sx={{ my: 2 }}>Characters</Typography>
      <Grid container spacing={2}>
        {getAvatars()}
      </Grid>
    </Box>
  )
}

export default EpisodeInfoPage
