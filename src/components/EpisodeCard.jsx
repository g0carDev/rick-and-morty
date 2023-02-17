import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Link } from 'react-router-dom'

export const EpisodeCard = ({ episode }) => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Link to={`/episode/${episode.id}`}>
        <Card sx={{ width: '100%' }}>
          <CardActionArea>
            <Box
              sx={{ p: 2, width: '100%' }}
              className='fadeIn'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <div>
                <Typography fontWeight={700} fontSize={20}>{episode.name}</Typography>
                <Typography fontSize={13}> {episode.air_date}</Typography>
              </div>
              <NavigateNextIcon />
            </Box>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  )
}
