import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersFetch } from '../redux/characters/charactersSlice'

export const useCharacterPage = () => {
  const [currentPage, setCurrentPage] = useState(Number(localStorage.getItem('currentCharactersPage')) ?? 1)
  const { characters, isLoading, pagination } = useSelector((state) => state.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('currentCharactersPage')) {
      localStorage.setItem('currentCharactersPage', 1)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('currentCharactersPage', currentPage)
  }, [currentPage])

  useEffect(() => {
    dispatch(getCharactersFetch(`character?page=${currentPage}`))
  }, [dispatch, characters.length, currentPage])

  const onChangePagination = (event, value) => {
    dispatch(getCharactersFetch(`character?page=${value}`))
    setCurrentPage(value)
  }

  return {
    characters,
    isLoading,
    pagination,
    currentPage,

    // methods
    onChangePagination
  }
}
