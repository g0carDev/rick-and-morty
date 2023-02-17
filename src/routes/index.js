import WindowIcon from '@mui/icons-material/Window'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { HomePage, CharactersPage, EpisodesPage, FavoritesPage } from '../pages'

export const routes = [
  {
    to: '/',
    path: '/',
    Component: HomePage,
    name: 'Home',
    Icon: WindowIcon,
    index: true
  },
  {
    to: '/characters',
    path: 'characters',
    Component: CharactersPage,
    name: 'Characters',
    Icon: PeopleAltIcon
  },
  {
    to: '/episodes',
    path: 'episodes',
    Component: EpisodesPage,
    name: 'Episodes',
    Icon: LiveTvIcon
  },
  {
    to: '/favorites',
    path: 'favorites',
    Component: FavoritesPage,
    name: 'Favorites',
    Icon: FavoriteIcon
  }
]
