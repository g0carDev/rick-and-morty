import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'
import { switchStatusColor } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteCharacter } from '../redux/characters/charactersSlice'

export const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { favorites } = useSelector(state => state.characters)

  const dispatch = useDispatch()

  useEffect(() => {
    if (favorites.some(favorite => favorite.id === character.id)) setIsFavorite(true)
  }, [character.id, favorites])

  const onAddFavorite = () => {
    dispatch(addFavoriteCharacter(character))
    setIsFavorite(!isFavorite)
  }
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Link to={`/character/${character.id}`}>
        <Card sx={{ width: '100%', maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 140 }}
              image={character.image}
              title={character.name}
            />
          </CardActionArea>
        </Card>
      </Link>
      <Box
        sx={{ mt: 1, width: '100%', maxWidth: 345 }}
        className='fadeIn'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <div>
          <Typography fontWeight={700}>{character.name}</Typography>
          <Box display='flex' alignItems='center' gap={0.5}>
            <Box sx={{ width: 10, height: 10, backgroundColor: switchStatusColor(character.status), borderRadius: 10 }} />
            <Typography fontSize={12}> {character.status} | {character.species}</Typography>
          </Box>
        </div>
        <Button
          size='small' onClick={onAddFavorite} startIcon={
            <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'white' }} />
                }
        >Like
        </Button>
      </Box>
    </Grid>
  )
}
