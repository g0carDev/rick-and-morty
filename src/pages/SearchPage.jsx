import { useEffect, useState } from "react"

import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useDispatch, useSelector } from "react-redux"
import { CharacterCard, EpisodeCard } from "../components"
import { getSearchFetch } from "../redux/search/searchSlice"
import { Spinner } from "../components/ui"

export const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1);


  const { dataSearch, isLoading, pagination } = useSelector((state) => state.search)

  const dispatch = useDispatch()

  const {
    searchTerm,
    searchIn,
    searchBy,
    status,
    gender,
    episode
  } = useSelector((state) => state.filters)

  useEffect(() => {
    if (searchIn === 'character') {
      setQuery(`${searchIn}?&${searchBy}=${searchTerm}&status=${status}&gender=${gender}`)
    } else {
      setQuery(`${searchIn}?&${searchBy}=${searchTerm}`)
    }
  }, [gender, searchBy, searchIn, searchTerm, status, episode])

  useEffect(() => {
    if (query) {
      dispatch(getSearchFetch(query))
    }
  }, [dispatch, query, searchIn]);

  const onChangePagination = (event, value) => {
    dispatch(getSearchFetch(query));
    setCurrentPage(value);
  };


  return (
    <Box>
      {dataSearch && dataSearch.length > 0 ?
        <Grid container spacing={2}>
          {
            isLoading ? <Spinner />
              :
              <>
                {
                  searchIn === 'character' ? (
                    dataSearch.map((character) => (
                      <CharacterCard key={character.id} character={character} />
                    ))
                  )
                    :
                    (
                      dataSearch.map((episode) => (
                        <EpisodeCard key={episode.id} episode={episode} />
                      ))
                    )
                }
              </>
          }
          <Grid item xs={12}>
            <Pagination page={currentPage} count={pagination.pages} color="primary" onChange={onChangePagination} />
          </Grid>
        </Grid>
        : <Typography sx={{ mt: 10 }} variant="h1">There are no information</Typography>

      }
    </Box>
  )
}

export default SearchPage
