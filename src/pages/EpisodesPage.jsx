
import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"
import { Spinner } from "../components/ui"
import { EpisodeCard } from "../components"
import { useEpisodesPage } from "../hooks"


export const EpisodesPage = () => {

  const { episodes, isLoading, currentPage, pagination, onChangePagination } = useEpisodesPage()

  return (
    <Grid container spacing={2}>
      {
        isLoading ? <Spinner />
          :
          episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))
      }
      <Grid item xs={12}>
        <Pagination page={currentPage} count={pagination.pages} color="primary" onChange={onChangePagination} />
      </Grid>
    </Grid>
  )
}

export default EpisodesPage
