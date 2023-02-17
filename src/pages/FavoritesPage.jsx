import { Box, Grid, Typography } from '@mui/material'
import Image from 'mui-image'

import { CharacterCard, EpisodeCard } from '../components'
import FavoritesImage from '../assets/images/favorites.png'
import { useFavoritesPage } from '../hooks'

export const FavoritesPage = () => {
  const { favoriteCharacters, favoriteEpisodes } = useFavoritesPage()

  return (
    <div>
      <Box sx={{ mb: 10, width: '100%', maxWidth: 250 }}>
        <Image
          src={FavoritesImage}
          duration={1000}
          alt='Favorites'
        />
      </Box>
      {
        favoriteEpisodes.length === 0 &&
          favoriteCharacters.length === 0
          ? <Typography sx={{ mt: 10 }} variant='h1' textAlign='center'>There are no favorites</Typography>
          : <Grid container spacing={2}>
            {
              favoriteCharacters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))
            }
            {
              favoriteEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))
            }
          </Grid>
      }
    </div>
  )
}

export default FavoritesPage
