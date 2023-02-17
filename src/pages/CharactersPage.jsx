import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'

import { CharacterCard } from '../components'
import { Spinner } from '../components/ui'

import { useCharacterPage } from '../hooks'

export const CharactersPage = () => {
  const { characters, isLoading, currentPage, pagination, onChangePagination } = useCharacterPage()
  return (
    <Grid container spacing={2}>
      {
        isLoading
          ? <Spinner />
          : characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
      }
      <Grid item xs={12}>
        <Pagination page={currentPage} count={pagination.pages} color='primary' onChange={onChangePagination} />
      </Grid>
    </Grid>
  )
}

export default CharactersPage
