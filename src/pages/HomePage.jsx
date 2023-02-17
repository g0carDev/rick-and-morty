import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'

import EastIcon from '@mui/icons-material/East'

import { Link } from 'react-router-dom'
import { CharacterCard } from '../components'
import { Spinner } from '../components/ui'
import { useHomePage } from '../hooks'

export const HomePage = () => {
  const { characters, isLoading } = useHomePage()

  return (
    <>
      {
        isLoading
          ? <Spinner />
          : <Grid container spacing={2}>
            {
              characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))
            }
            <Grid item xs={6}>
              <Link to='characters'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea sx={{ padding: 2, display: 'flex' }}>
                    <Typography variant='h5' color='text.secondary'>
                      View all characters
                    </Typography>
                    <EastIcon />
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
      }

    </>
  )
}
