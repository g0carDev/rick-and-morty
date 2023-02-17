import { useSelector } from 'react-redux'

export const useFavoritesPage = () => {
  const { favorites: favoriteEpisodes } = useSelector((state) => state.episodes)
  const { favorites: favoriteCharacters } = useSelector((state) => state.characters)

  return {
    favoriteEpisodes,
    favoriteCharacters
  }
}
